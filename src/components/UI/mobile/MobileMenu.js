import { XIcon, SearchIcon } from "@heroicons/react/solid";
import LocationList from "../LocationList";
import { useState, useContext } from "react";
import AppContext from "../../../context/AppContext";

export default function MobileMenu() {
  const { changeMenuState, changeCity, cityToDisplay } = useContext(AppContext);
  let defaultLocation = cityToDisplay + ", Finland";
  const [location, setLocation] = useState(defaultLocation);

  const onSelectHandler = (location) => {
    setLocation(location);
  };

  const onConfirmHandler = () => {
    changeMenuState();
    let myCity = location.split(",")[0];
    changeCity(myCity);
  };

  return (
    <div className=" bg-white z-10 p-3 absolute top-0 w-full">
      <div className="flex justify-between items-center mb-4">
        <p className="font-bold">Edit your Search</p>
        <XIcon onClick={changeMenuState} className="h-6 cursor-pointer" />
      </div>
      <div className="w-[90vw] mx-auto shadow-md border-2 rounded-2xl">
        <div className="flex flex-col pl-8 pt-3 pb-3">
          <label className="font-bold text-sm" htmlFor="location">
            LOCATION
          </label>
          <input
            className="outline-none"
            id="location"
            type="text"
            value={location}
            readOnly
          />
        </div>
        <div className="w-full border-[0.1px] border-lightergrayish" />
        <div className="flex flex-col pl-8 pt-3 pb-3">
          <label className="font-bold text-sm" htmlFor="guests">
            GUESTS
          </label>
          <input
            className="outline-none"
            id="guests"
            type="text"
            placeholder="Add guests"
          />
        </div>
      </div>
      <div>
        <LocationList onSelect={onSelectHandler} />
      </div>
      <button
        onClick={onConfirmHandler}
        className="h-[50px] w-[140px] text-white bg-watermelon hover:bg-watermelonHover text-lg mx-auto flex items-center justify-center rounded-2xl py-7 px-4 mb-5"
      >
        <SearchIcon className="h-6 mr-2" />
        Search
      </button>
    </div>
  );
}
