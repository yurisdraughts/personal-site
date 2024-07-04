import * as React from "react";
import LocationContext from "./LocationContext";

export const LocationContextProvider = ({
  element,
  props: {
    location: { pathname },
  },
}) => {
  return (
    <LocationContext.Provider value={pathname}>
      {element}
    </LocationContext.Provider>
  );
};
