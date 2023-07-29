import Home from "./Home";
import "./App.css";
import { useState } from "react";

function App() {
  const [countryData, setCountryData] = useState("");
  const [countryValid, setCountryValid] = useState(true);

  const handleSearch = (country) => {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then((response) => {
        if (!response.ok) {
          if (response.status >= 400 && response.status < 500) {
            setCountryValid(false);
            throw new Error(
              "client-side error - please check the country you entered"
            );
          } else if (response.status >= 500) {
            throw new Error("server-side error - please try again later");
          }
        }
        setCountryValid(true);
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setCountryData(JSON.stringify(data[0]));
        } else {
          setCountryData("");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <Home handleSearch={handleSearch} countryValid={countryValid} />
      {countryData === "" ? null : <p>{countryData}</p>}
    </div>
  );
}

export default App;
