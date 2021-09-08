import React, { useState } from "react";

const AppContext = React.createContext({
  menuToggled: false,
  cityToDisplay: "",
  changeMenuState: () => {},
  changeCity: () => {}
});

export function AppContextProvider(props) {
  const [menuToggled, setMenuToggled] = useState(false);
  const [city, setCity] = useState("Helsinki");

  function changeMenuState() {
    setMenuToggled((prevState) => !prevState);
  }

  return (
    <AppContext.Provider
      value={{
        changeMenuState: changeMenuState,
        cityToDisplay: city,
        menuToggled: menuToggled,
        changeCity: setCity,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
