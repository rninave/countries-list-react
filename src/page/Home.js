import CountryCard from "../components/CountryCard";
import { useEffect, useState } from "react";
import { getAllCountries } from "../api";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const [countriesList, setCountriesList] = useState([]);
  const [region, setRegion] = useState("");
  const [countryName, setcountryName] = useState("");
  const [filteredCountriesList, setFilteredCountriesList] = useState("");

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handlecountryNameChange = (event) => {
    setcountryName(event.target.value);
  };

  useEffect(() => {
    getAllCountries().then((result) => {
      const countries = result.data;
      setCountriesList(countries);
      setFilteredCountriesList(countries);
    });
  }, []);

  useEffect(() => {
    if(region==='') setFilteredCountriesList(countriesList)
    const filteredCountries = countriesList.filter((country) => {
      if (country.region == region) return true;
      return false;
    });
    setFilteredCountriesList(filteredCountries);
  }, [region, countriesList]);

  return (
    <>
      <Container>
        <div className="d-flex mt-3 justify-content-between">
          <Form.Control
            className=" w-18rem me-3"
            size="lg"
            type="text"
            placeholder="Filter By Name"
            value={countryName}
            onChange={handlecountryNameChange}
          />
          <Form.Select
            aria-label="Default select example"
            className="w-14rem"
            value={region}
            onChange={handleRegionChange}
          >
            <option>Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="europe">Europe</option>
            <option value="asia">Asia</option>
          </Form.Select>
        </div>

        <div className="countries-data d-flex justify-content-between flex-wrap mt-3">
          {countriesList.map((country) => (
            <Link
              className="text-decoration-none"
              to={`/countries/${country.cca3}`}
            >
              <CountryCard
                name={country.name.common}
                capital={country.capital}
                population={country.population}
                flagurl={country.flags.svg}
                key={country.cca3}
              />
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Home;
