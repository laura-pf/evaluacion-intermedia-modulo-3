import "../scss/App.scss";
import Header from "./Header";
import dataCountries from "../services/data.json";
import ListCountries from "./ListCountries";
import Filters from "./Filters";

function App() {
  return (
    <>
      <Header />
      <Filters />
      <ListCountries countriesInfo={dataCountries} />
    </>
  );
}

export default App;
