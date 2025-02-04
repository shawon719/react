import React, { useEffect, useState } from "react";
import Countries from "../components/Countries";

const About = () => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  return (
    <div>
      <h2 className="text-center text-2xt font-bold">country:{country.length}</h2>
      <div className="grid grid-cols-3 gap-4">
        {country.map((country) => (
          <Countries cont={country}></Countries>
        ))}
      </div>
    </div>
  );
};

export default About;
