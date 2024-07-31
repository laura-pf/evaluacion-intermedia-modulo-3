import "../scss/components/Filters.scss";

function Filters(props) {
  function handleChangeInput(event) {
    const inputValue = event.target.value;
    const idInput = event.target.id;
    props.onChangeFilter(inputValue, idInput);
  }

  function handleChangeSelect(event) {
    const selectValue = event.target.value;
    const idSelect = event.target.id;
    props.onChangeFilter(selectValue, idSelect);
  }

  return (
    <form className="form">
      <p> Filters </p>
      <div className="divLabelInput">
        <label htmlFor="country">By Country</label>
        <input
          className="input"
          type="text"
          id="country"
          onChange={handleChangeInput}
        />
      </div>
      <div className="divLabelInput">
        <label htmlFor="continent">By Continent</label>
        <select
          className="input"
          id="continent"
          value={props.selectName}
          name="continent"
          onChange={handleChangeSelect}
        >
          <option id="all" value="All">
            All
          </option>
          <option id="africa" value="Africa">
            Africa
          </option>
          <option id="north-america" value="North America">
            North America
          </option>
          <option id="south-america" value="South America">
            South America
          </option>
          <option id="europe" value="Europe">
            Europe
          </option>
          <option id="asia" value="Asia">
            Asia
          </option>
          <option id="oceania" value="Oceania">
            Oceania
          </option>
        </select>
      </div>
    </form>
  );
}

export default Filters;
