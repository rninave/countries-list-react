import axios from "axios";

const countryApi = "https://restcountries.com/v3.1";

export function getAllCountries() {
  return axios.get(`${countryApi}/all`);
}
export function getCountryDetails(countryCode) {
  return axios.get(`${countryApi}/alpha/${countryCode}`);
}
