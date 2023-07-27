import { FiPhoneCall, FiMail } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";

const TopBar = () => {
  return (
    <nav className="bg-black mx-0">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between h-16 sm:flex-no-wrap">
          <div className="flex items-center w-full sm:w-auto mb-2 sm:mb-0 sm:order-2">
            <div className="ml-4 flex items-center">
              <FiPhoneCall className="text-white text-base sm:text-lg  sm:block mx-2" />
              <span className="text-white text-sm sm:text-base md:text-lg lg:text-lg  sm:inline-block">
                +92 300 0000000
              </span>
            </div>
            <div className="ml-4 flex items-center">
              <FiMail className="text-white text-base sm:text-lg  sm:block mx-2" />
              <span className="text-white text-sm sm:text-base md:text-lg lg:text-lg  sm:inline-block">
                <a href="mailto:info@roflox.com">info@roflox.com</a>
              </span>
            </div>
          </div>
          <div className="w-full sm:w-auto sm:order-1">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-white text-sm sm:text-base md:text-lg lg:text-lg flex items-center">
                  <BsHandbag className="mr-2" />
                  World's Fastest Online Shopping Destination
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;