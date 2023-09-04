import CountryCard from "../components/CountryCard";
import { useEffect, useState } from "react";
import { getAllCountries } from "../api";
import { Container } from "react-bootstrap";

function Home() {
  const [countriesList, setCountriesList] = useState([]);
  useEffect(() => {
    getAllCountries().then((result) => {
      const countries = result.data;
      setCountriesList(countries);
      console.log(result, "dfjgbjf");
    });
  }, []);
  console.log(countriesList, "countriesList");
  return (
    <>
      <Container>
        <div className="countries-data d-flex flex-wrap mt-3">
          {countriesList.map((country) => (
            <CountryCard
              name={country.name.common}
              capital={country.capital}
              population={country.population}
              flagurl={country.flags.svg}
            />
          ))}
        </div>
      </Container>
    </>
  );
}

export default Home;
