import { useRef } from "react";

function Home({ handleSearch, countryValid }) {
  const countryRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const country = countryRef.current.value;
    handleSearch(country);
  };
  return (
    <main className="Home">
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchCountry">
          Type a country:
          <input type="search" name="searchCountry" ref={countryRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {!countryValid ? <p style={{ color: "red" }}>Invalid Country</p> : null}
    </main>
  );
}

export default Home;
