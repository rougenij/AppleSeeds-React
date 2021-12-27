import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryList from "./CountryList";

const App = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://restcountries.com/v2/all");
        setCountry(response.data);
      } catch (e) {
        console.log(e);
      }
    })();

    return () => {};
  }, [country]);
  return (
    <div>
      <input
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      />
      {country.map((country) => {
        return <CountryList countryName={country.name} />;
      })}
    </div>
  );
};

export default App;
