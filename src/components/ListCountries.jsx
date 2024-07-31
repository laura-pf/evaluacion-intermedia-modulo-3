import Country from "./Country";
import "../scss/components/ListCountries.scss";

function ListCountries(props) {
  return (
    <ul className="list">
      {props.countriesInfo.map((countryItem, index) => {
        return <Country key={index} item={countryItem} />;
      })}
    </ul>
  );
}

export default ListCountries;
