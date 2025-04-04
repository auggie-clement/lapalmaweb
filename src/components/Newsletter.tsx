import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faFacebook,
  faXTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

export const Newsletter = () => {
  const icons = [
    { name: "instagram", icon: faInstagram },
    { name: "tiktok", icon: faTiktok },
    { name: "facebook", icon: faFacebook },
    { name: "x", icon: faXTwitter },
    { name: "pinterest", icon: faPinterest },
  ];
  return (
    <div className="flex flex-col bg-gray-100 items-center justify-center space-y-8 py-16">
      {/* Header Section */}
      <div className="flex flex-col items-center space-y-2">
        {/* <div className="text-4xl font-semibold text-gold">&#9679;</div> */}
        <h2 className="text-xl ">JOIN THE ADVENTURE</h2>
        <p className="text-sm text-center">
          Subscribe and Find Your Dream Vacation
        </p>
      </div>

      {/* Subscription and Social Media Section */}
      <div className="flex items-center space-x-8">
        {/* Subscription Form */}
        <div className="flex flex-col items-center">
          <form className="relative inline-flex items-center border border-gray-400 w-[450px] h-[56px] shadow-md">
            <input
              type="email"
              placeholder="Email Address"
              className="px-3 py-2 bg-transparent focus:outline-none text-sm w-3/4 h-full"
            />
            <Button className="text-sm mr-1 px-5 py-3">SUBMIT &gt;</Button>
          </form>
          <p className="text-xs text-gray text-muted-foreground leading-tight text-center w-80 mt-2">
            By signing up, you agree to our Terms of Service and Privacy Policy.
            You may unsubscribe at any time.
          </p>
        </div>

        {/* Divider */}
        <div className="w-px h-24 bg-gray-300"></div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex justify-center space-x-6">
            {icons.map((iconObj, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-16 h-16 bg-primary  rounded-full "
              >
                <FontAwesomeIcon
                  icon={iconObj.icon}
                  className="text-white text-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
