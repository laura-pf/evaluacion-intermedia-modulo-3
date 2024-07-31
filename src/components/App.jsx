import "../scss/App.scss";
import Header from "./Header";
import dataCountries from "../services/data.json";
import ListCountries from "./ListCountries";
import Filters from "./Filters";
import { useState } from "react";

function App() {
  const [filterValue, setFilterValue] = useState("");
  const [selectInput, setSelectInput] = useState("All");

  function handleChangeFilter(value, id) {
    if (id === "country") {
      setFilterValue(value);
    } else if (id === "continent") setSelectInput(value);
  }

  const filteredCountries = dataCountries

    .filter((countryItem) => {
      return countryItem.name.official
        .toLowerCase()
        .includes(filterValue.toLowerCase());
    })

    .filter((countryItem) => {
      if (selectInput === "All") {
        return true;
      } else {
        return countryItem.continents[0] === selectInput;
      }
    });

  return (
    <>
      <Header />
      <Filters onChangeFilter={handleChangeFilter} />
      <ListCountries
        countriesInfo={filteredCountries}
        selectName={selectInput}
      />
    </>
  );
}

export default App;
