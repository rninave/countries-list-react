import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountryDetails } from "../api";

export default function Counrtydetails(props) {
  const { countryCode } = useParams();
  console.log("countrycode:", countryCode);

  const [detail, setDetail] = useState({});

  useEffect(() => {
    getCountryDetails(countryCode).then((result) => {
      console.log("result.data", result.data);
      setDetail(result.data);
    });
  }, [countryCode]);

  return(
    <div className="">
    <div>
      <img src={detail.flags?.png} alt={detail.name} />
    </div>
  </div>
  ) 
  
}
