import { useRef, useContext } from "react";
import Apartment from "./Apartment";
import data from "../../stays.json";
import AppContext from "../../context/AppContext";

export default function ApartmentList() {
  const renderCount = useRef(0);
  const { cityToDisplay, menuToggled, changeMenuState } =
    useContext(AppContext);

  renderCount.current = renderCount.current + 1;

  let filteredData = data.filter((myData) => {
    return myData.city === cityToDisplay;
  });

  const onClickHandler = () => {
    if (menuToggled === true) {
      changeMenuState();
    }
  };

  return (
    <main onClick={onClickHandler}>
      {renderCount.current <= 2 ? (
        <div className="p-4 sm:p-8 lg:px-16">
          <div className="mb-10 flex justify-between items-center">
            <p className=" text-2xl font-bold">All stays in Finland</p>
            <p className="text-lg">{`${data.length} stays`}</p>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
            {data.map((apartment) => {
              return (
                <Apartment
                  key={apartment.photo}
                  image={apartment.photo}
                  type={apartment.type}
                  bed={apartment.beds}
                  rating={apartment.rating}
                  title={apartment.title}
                  superHost={apartment.superHost}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="p-4 sm:p-8 lg:px-16">
          <div className="mb-10 flex justify-between items-center">
            <p className=" text-2xl font-bold">Stays in Finland</p>
            <p className="text-lg">{`${filteredData.length} stays`}</p>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
            {filteredData.map((apartment) => {
              return (
                <Apartment
                  key={apartment.photo}
                  image={apartment.photo}
                  type={apartment.type}
                  bed={apartment.beds}
                  rating={apartment.rating}
                  title={apartment.title}
                  superHost={apartment.superHost}
                />
              );
            })}
          </div>
        </div>
      )}
    </main>
  );
}
