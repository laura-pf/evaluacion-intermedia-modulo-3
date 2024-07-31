import "../scss/components/Country.scss";

function Country(props) {
  return (
    <li className="country">
      <div>{props.item.flag}</div>
      <p>{props.item.name.official}</p>
      <p>{props.item.capital[0]}</p>
      <p>{props.item.continents[0]}</p>
    </li>
  );
}

export default Country;

//    <p>{props.item.capital[0]}</p>
// <p>{props.item.continents[0]}</p>

//para que se seleccione el primer elemento del array
