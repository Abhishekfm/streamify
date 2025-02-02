/* eslint-disable react/prop-types */
// context/DashboardContext.jsx
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    artist: "",
    dateRange: "all",
    minStreams: 0,
  });

  return (
    <DashboardContext.Provider value={{ filters, setFilters }}>
      {children}
    </DashboardContext.Provider>
  );
};
