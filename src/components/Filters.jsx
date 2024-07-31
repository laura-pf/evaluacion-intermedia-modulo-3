function Filters() {
  return (
    <form>
      <p> Filters </p>
      <label htmlFor="country">By Country</label>
      <input type="text" id="country" />
      <label htmlFor="continent">By continent</label>
      <select id="continent-select" name="continent">
        <option id="all" value="all-option">
          All
        </option>
        <option id="africa" value="africa-option">
          Africa
        </option>
        <option id="north-america" value="north-america-option">
          North America
        </option>
        <option id="south-america" value="south-america-option">
          South America
        </option>
        <option id="europe" value="europe-option">
          Europe
        </option>
        <option id="asia" value="asia-option">
          Asia
        </option>
        <option id="oceania" value="oceania-option">
          Oceania
        </option>
      </select>
    </form>
  );
}

export default Filters;
