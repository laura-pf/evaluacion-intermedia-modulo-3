import Country from "./Country";
import "../scss/components/ListCountries.scss";

function ListCountries(props) {
  return (
    <ul className="list">
      {props.countriesInfo.map((countryItem) => {
        return <Country key={countryItem.name.official} item={countryItem} />;
      })}
    </ul>
  );
}

export default ListCountries;
