import PropTypes from "prop-types";
import { DataShere } from "./dataShere";
import { useState } from "react";

export function DataShereprovider(props) {
  const [search, setSearch] = useState("");
  return (
    <DataShere.Provider value={{ search, setSearch }}>
      {props.children}
    </DataShere.Provider>
  );
}
DataShereprovider.propTypes = {
  children: PropTypes.object,
};
