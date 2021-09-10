import { SearchIcon } from "@heroicons/react/solid";
import { useState, useContext } from "react";
import AppContext from "../../context/AppContext";
import CountSelector from "./CountSelector";
import LocationList from "./LocationList";

export default function Menu() {
  const [locatonActive, setLocationActive] = useState(false);
  const [guestActive, setGuestActive] = useState(false);
  const { changeMenuState, changeCity, cityToDisplay } = useContext(AppContext);
  let defaultLocation = cityToDisplay + ", Finland";
  const [location, setLocation] = useState(defaultLocation);

  const onLocationClick = () => {
    setLocationActive(true);
    setGuestActive(false);
  };

  const onGuestClick = () => {
    setLocationActive(false);
    setGuestActive(true);
  };

  const onConfirmHandler = () => {
    changeMenuState();
    let myCity = location.split(",")[0];
    changeCity(myCity);
  };

  const onSelectHandler = (location) => {
    setLocation(location);
  };

  return (
    <div className="z-10 bg-white absolute top-0 w-full py-12 px-24 cursor-pointer grid grid-cols-3 gap-y-0 ">
      <div
        className={`flex flex-col pl-4 justify-center shadow-md border-r-[1px] border-lightergrayish  py-4 ${
          locatonActive ? "outline-black" : ""
        }`}
        onClick={onLocationClick}
      >
        <label htmlFor="" className="cursor-pointer text-sm font-bold">
          LOCATION
        </label>
        <input
          type="text"
          className="cursor-pointer text-sm focus:outline-none"
          value={location}
          readOnly
        />
      </div>
      <div
        className={`flex flex-col pl-4 justify-center shadow-md border-r-[1px] border-lightergrayish ${
          guestActive ? "outline-black" : ""
        }`}
        onClick={onGuestClick}
      >
        <label htmlFor="" className="cursor-pointer text-sm font-bold ">
          GUESTS
        </label>
        <input
          type="text"
          className="cursor-pointer text-sm focus:outline-none"
          value="Select number of guests"
          readOnly
        />
      </div>
      <div className="flex justify-center items-center shadow-md ">
        <button
          onClick={onConfirmHandler}
          className="h-[50px] w-[140px] text-white bg-watermelon hover:bg-watermelonHover text-lg flex items-center justify-center rounded-2xl py-7 px-4"
        >
          <SearchIcon className="h-6 mr-2" />
          Search
        </button>
      </div>
      <div
        className={`${
          locatonActive ? "visible" : "invisible"
        } transition transform duration-200 ease-in`}
      >
        <LocationList onSelect={onSelectHandler} />
      </div>
      <div className={`pt-6 ${guestActive ? "visible" : "invisible"}`}>
        <CountSelector title="Adult" age="Ages 13 or above" />
        <CountSelector title="Children" age="Ages 2-12" />
      </div>
    </div>
  );
}
