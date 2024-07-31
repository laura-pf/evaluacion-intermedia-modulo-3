import "../scss/components/Country.scss";

function Country(props) {
  return (
    <li className="country">
      <div>{props.item.flag}</div>
      <p>{props.item.official}</p>
      <p>{props.item.capital}</p>
      <p>{props.item.continents}</p>
    </li>
  );
}

export default Country;
