import { Bed, Bath, Users, Square } from "lucide-react";

interface PropertyStatsProps {
  bedrooms: number;
  bathrooms: number;
  beds: number;
  guests: number;
  sqft: number;
}

const PropertyStats = ({
  bedrooms,
  bathrooms,
  beds,
  guests,
  sqft,
}: PropertyStatsProps) => {
  return (
    <div className="flex text-md items-center space-x-8 ml-1 ">
      <div className="flex items-center space-x-2">
        <Bed size={20} />
        <span>{bedrooms} bedrooms</span>
      </div>
      <div className="flex items-center space-x-2">
        <Bath size={20} />
        <span>{bathrooms} baths</span>
      </div>
      <div className="flex items-center space-x-2">
        <Bed size={20} />
        <span>{beds} beds</span>
      </div>
      <div className="flex items-center space-x-2">
        <Users size={20} />
        <span>{"<" + guests} guests</span>
      </div>
      <div className="flex items-center space-x-2">
        <Square size={20} />
        <span>{sqft.toLocaleString()} sqft</span>
      </div>
    </div>
  );
};

export default PropertyStats;
