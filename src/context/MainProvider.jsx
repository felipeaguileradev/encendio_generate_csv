import { useState } from "react";
import { MainContext } from "./MainContext";

// eslint-disable-next-line react/prop-types
export const MainProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <MainContext.Provider value={{ loading, setLoading }}>
      {children}
    </MainContext.Provider>
  );
};
