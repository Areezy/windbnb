import logo from "./images/logo.svg";
import { SearchIcon } from "@heroicons/react/solid";
import MobileMenu from "./mobile/MobileMenu";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import Menu from "./Menu";
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const { menuToggled, changeMenuState, cityToDisplay } =
    useContext(AppContext);
  let location = cityToDisplay + ", Finland";

  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <>
      {!isBigScreen && menuToggled && <MobileMenu />}
      {isBigScreen && menuToggled && <Menu />}
      <header className="w-screen">
        <div className="sm:p-8 lg:px-16 md:flex md:justify-between items-center">
          <img
            className="h-8 mx-4 sm:mx-0 my-4 cursor-pointer"
            src={logo}
            alt="windbnb"
          />
          <div
            onClick={changeMenuState}
            className="flex h-16 items-center w-4/5 border-2 border-transparent shadow-md mx-auto mt-7 rounded-2xl max-w-400 md:m-4"
          >
            <div className="h-full flex items-center justify-center border-gray-100 border-r-2 p-2 w-full text-center">
              <p className="cursor-pointer">
                {location || "Helsinki, Finland"}
              </p>
            </div>
            <div className="h-full p-4 border-gray-100 border-r-2 w-full flex items-center justify-center">
              <input
                type="text"
                placeholder="Add guests"
                className="outline-none w-full"
              />
            </div>
            <div className="h-full w-80 flex items-center justify-center">
              <SearchIcon className="h-7  text-orange cursor-pointer" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
