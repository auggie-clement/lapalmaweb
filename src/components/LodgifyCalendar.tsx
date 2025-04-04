// import React, { useState } from "react";
// import BookingCalendar from "react-booking-calendar";

// const DateSelector = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [year, setYear] = useState(2025);
//   const [month, setMonth] = useState(2); // March (0-indexed)

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//   };

//   const handlePrevMonth = () => {
//     if (month === 0) {
//       setMonth(11);
//       setYear(year - 1);
//     } else {
//       setMonth(month - 1);
//     }
//   };

//   const handleNextMonth = () => {
//     if (month === 11) {
//       setMonth(0);
//       setYear(year + 1);
//     } else {
//       setMonth(month + 1);
//     }
//   };

//   const months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   const bookings = [
//     new Date(2025, 2, 10),
//     new Date(2025, 2, 15),
//     // Add more booked dates as needed
//   ];

//   const buttonStyle = {
//     backgroundColor: "#000",
//     color: "#fff",
//     padding: "0.25rem 0.5rem",
//     border: "none",
//     borderRadius: "0.25rem",
//     cursor: "pointer",
//     height: "2rem",
//   };

//   const selectStyle = {
//     backgroundColor: "#333",
//     color: "#fff",
//     padding: "0.25rem 0.5rem",
//     border: "none",
//     borderRadius: "0.25rem",
//     appearance: "none",
//     cursor: "pointer",
//     height: "2rem",
//   };

//   return (
//     <div className="bg-gray-900 text-white p-4 rounded-lg w-full">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg font-bold">Select dates</h2>
//         <a href="#" className="text-sm text-blue-400">
//           Open to offers
//         </a>
//       </div>
//       <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
//         <button style={buttonStyle} onClick={handlePrevMonth}>
//           {"<"}
//         </button>
//         <select
//           style={selectStyle}
//           value={year}
//           onChange={(e) => setYear(Number(e.target.value))}
//         >
//           {/* Options for years */}
//           {[2023, 2024, 2025, 2026].map((yr) => (
//             <option key={yr} value={yr}>
//               {yr}
//             </option>
//           ))}
//         </select>
//         <select
//           style={selectStyle}
//           value={month}
//           onChange={(e) => setMonth(Number(e.target.value))}
//         >
//           {months.map((m, index) => (
//             <option key={m} value={index}>
//               {m}
//             </option>
//           ))}
//         </select>
//         <button style={buttonStyle} onClick={handleNextMonth}>
//           {">"}
//         </button>
//       </div>
//       <div className="grid grid-cols-7 text-center text-gray-400 mb-2">
//         <div>SU</div>
//         <div>MO</div>
//         <div>TU</div>
//         <div>WE</div>
//         <div>TH</div>
//         <div>FR</div>
//         <div>SA</div>
//       </div>
//       <div className="grid grid-cols-7 text-center">
//         {[...Array(31)].map((_, i) => (
//           <div
//             key={i}
//             className={`p-2 ${
//               selectedDate === i + 1 ? "bg-blue-500" : "bg-gray-800"
//             } cursor-pointer`}
//             onClick={() => handleDateClick(i + 1)}
//           >
//             <div className="text-gray-400">{i + 1}</div>
//             <div className="text-sm text-white">
//               ${Math.floor(Math.random() * 500) + 900}
//             </div>
//           </div>
//         ))}
//       </div>
//       <BookingCalendar bookings={bookings} />
//       <button className="bg-gray-700 text-white w-full mt-4 py-2 rounded">
//         Reserve
//       </button>
//     </div>
//   );
// };

// export default DateSelector;

import React, { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css"; // Import base styles
import {
  format,
  parseISO,
  eachDayOfInterval,
  isSameDay,
  startOfDay,
} from "date-fns";
import ICAL from "ical.js"; // Import ical.js

// --- Interfaces ---
interface LodgifyCalendarProps {
  icalUrl: string; // The iCal feed URL from Lodgify
  // Add other props as needed, e.g., for styling overrides, initial month
}

interface BookedEvent {
  start: Date;
  end: Date;
}

// --- Helper Function to Parse iCal Data ---
const parseICalData = (icalData: string): Date[] => {
  const bookedDates = new Set<string>(); // Use Set for efficient storage of YYYY-MM-DD strings

  try {
    const jcalData = ICAL.parse(icalData);
    const component = new ICAL.Component(jcalData);
    const vevents = component.getAllSubcomponents("vevent");

    vevents.forEach((vevent) => {
      const event = new ICAL.Event(vevent);
      const dtstart = event.startDate;
      const dtend = event.endDate;

      // Ensure we have valid start and end times
      if (dtstart && dtend) {
        // Convert ICAL.Time to JavaScript Date objects
        // Adjust for potential timezone issues if necessary. iCal dates can be tricky.
        // startOfDay helps normalize to the beginning of the day for comparison.
        let startDate = startOfDay(dtstart.toJSDate());
        let endDate = startOfDay(dtend.toJSDate());

        // iCal DTEND is often exclusive, meaning the booking ends *at the start* of that day.
        // For displaying availability, we usually want to include the check-out day as available
        // unless it spans the entire day. Let's assume DTEND marks the start of the *first available* day.
        // So, the last *booked* day is the day *before* dtend.
        // However, if the event duration is exactly 1 day or less, endDate might be the same day as startDate.
        // Let's iterate from startDate up to (but not including) endDate.

        // Handle potential all-day events where end date might need adjustment
        // If the time part is 00:00:00, it often represents the start of the day.
        // We subtract one day from the end date because the period typically ends *at the beginning* of the end date.
        // Example: Booked Apr 5th to Apr 7th -> DTSTART: Apr 5, DTEND: Apr 8. Booked days are 5, 6, 7.
        if (endDate > startDate) {
          endDate = new Date(endDate.setDate(endDate.getDate() - 1)); // Adjust end date to be inclusive
        }

        // Generate all dates within the interval
        if (startDate <= endDate) {
          const intervalDates = eachDayOfInterval({
            start: startDate,
            end: endDate,
          });
          intervalDates.forEach((date) => {
            bookedDates.add(format(date, "yyyy-MM-dd")); // Store in YYYY-MM-DD format
          });
        }
      }
    });
  } catch (error) {
    console.error("Error parsing iCal data:", error);
    // Handle parsing errors appropriately in your UI
  }

  // Convert Set back to Date array for react-day-picker (or keep as Set if modifier logic allows)
  return Array.from(bookedDates).map((dateStr) => parseISO(dateStr));
};

// --- The Calendar Component ---
const LodgifyCalendar: React.FC<LodgifyCalendarProps> = ({ icalUrl }) => {
  const [bookedDates, setBookedDates] = useState<Date[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState<Date>(
    startOfDay(new Date())
  ); // Start with current month

  useEffect(() => {
    const fetchAndParseCalendar = async () => {
      setIsLoading(true);
      setError(null);
      setBookedDates([]); // Clear previous dates

      if (!icalUrl) {
        setError("iCal URL is missing.");
        setIsLoading(false);
        return;
      }

      try {
        // Construct the URL to your new API route
        const proxyEndpoint = `/api/lodgify-proxy?url=${icalUrl}`;

        console.log(`Workspaceing from proxy: ${proxyEndpoint}`); // Log for debugging

        const response = await fetch(proxyEndpoint); // Fetch from your proxy endpoint

        if (!response.ok) {
          const errorText = await response.text(); // Get error details from proxy if possible
          console.error(`Proxy response error: ${response.status}`, errorText);
          throw new Error(
            `Failed to load availability via proxy: ${response.statusText}. ${errorText}`
          );
        }

        const icalData = await response.text();
        const parsedDates = parseICalData(icalData);
        setBookedDates(parsedDates);
      } catch (err: any) {
        console.error("Failed to fetch or parse via proxy:", err);
        setError(
          `Failed to load availability: ${
            err.message || "Unknown error"
          }. Check browser console and proxy logs.`
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndParseCalendar();
  }, [icalUrl]); // Re-fetch if the icalUrl prop changes

  // --- Define Modifiers for react-day-picker ---
  const bookedStyle = {
    // Using Tailwind classes via style prop isn't standard for react-day-picker v8+
    // We'll use modifiersClassNames or classNames prop below
  };

  // Modifier to disable booked days
  const bookedDaysModifier = (date: Date): boolean => {
    // Normalize date to start of day for reliable comparison
    const comparisonDate = startOfDay(date);
    return bookedDates.some((bookedDate) =>
      isSameDay(comparisonDate, startOfDay(bookedDate))
    );
  };

  return (
    <div className="p-4 border rounded-md shadow-lg bg-white dark:bg-gray-800">
      {isLoading && (
        <div className="text-center text-gray-500 dark:text-gray-400">
          Loading availability...
        </div>
      )}
      {error && (
        <div className="text-center text-red-600 dark:text-red-400 p-4 border border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900 rounded">
          Error: {error}
        </div>
      )}
      {!isLoading && !error && (
        <DayPicker
          mode="single" // Or "range" if you want selection, but we primarily display here
          month={currentMonth}
          onMonthChange={setCurrentMonth}
          modifiers={{ booked: bookedDaysModifier }} // Reference the modifier function
          modifiersClassNames={{
            booked:
              "bg-red-200 text-gray-500 line-through opacity-70 dark:bg-red-800 dark:text-gray-400", // Tailwind classes for booked days
          }}
          disabled={bookedDaysModifier} // Also disable selection/interaction
          showOutsideDays
          // --- Tailwind Styling using classNames prop ---
          classNames={{
            root: "relative",
            caption:
              "flex justify-center items-center text-lg font-semibold pt-2 pb-4 relative",
            caption_label: "text-gray-800 dark:text-gray-100",
            nav: "absolute top-2 flex items-center",
            nav_button:
              "inline-flex items-center justify-center rounded-md p-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse",
            head_row: "flex mb-2",
            head_cell:
              "w-10 h-10 flex items-center justify-center text-sm font-medium text-gray-500 dark:text-gray-400", // Adjusted width/height
            row: "flex w-full mt-2",
            cell: "flex-1 text-center p-0 m-0", // Use flex-1 for equal distribution
            day: "w-10 h-10 flex items-center justify-center rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 dark:text-gray-100", // Base day styling
            day_today:
              "bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-blue-100 font-semibold",
            day_outside: "text-gray-400 dark:text-gray-500 opacity-50",
            day_disabled:
              "text-gray-400 dark:text-gray-500 opacity-50 cursor-not-allowed",
            // Apply booked styles via modifier, ensure disabled styles don't fully override visually
            // day_booked:
            //   "bg-red-200 text-gray-500 line-through dark:bg-red-800 dark:text-gray-400 opacity-70 hover:bg-red-200 dark:hover:bg-red-800", // Combine with modifierClassNames if needed
          }}
        />
      )}
      {/* Optional Legend */}
      {!isLoading && !error && (
        <div className="mt-4 flex items-center justify-center space-x-4 text-sm">
          <div className="flex items-center space-x-1">
            <span className="block w-4 h-4 bg-red-200 dark:bg-red-800 rounded-sm"></span>
            <span className="text-gray-600 dark:text-gray-300">Booked</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="block w-4 h-4 bg-blue-100 dark:bg-blue-700 rounded-sm"></span>
            <span className="text-gray-600 dark:text-gray-300">Today</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LodgifyCalendar;
