import CountryCard from "../components/CountryCard";
import { useEffect, useState } from "react";
import { getAllCountries } from "../api";
import { Container, Form } from "react-bootstrap";

function Home() {
  const [countriesList, setCountriesList] = useState([]);
  useEffect(() => {
    getAllCountries().then((result) => {
      const countries = result.data;
      setCountriesList(countries);
      console.log(result);
    });
  }, []);

  return (
    <>
      <Container>
        <div className="d-flex mt-3">
          <Form.Control
            className=" w-18rem me-3"
            size="lg"
            type="text"
            placeholder="Filter By Name"
          />
          <Form.Select aria-label="Default select example" className="w-14rem">
            <option>Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="europe">Europe</option>
            <option value="asia">Asia</option>
          </Form.Select>
        </div>

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
