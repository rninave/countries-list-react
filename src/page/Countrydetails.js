import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountryDetails } from "../api";

export default function Counrtydetails(props) {
  const { countryCode } = useParams();
  console.log("countrycode:", countryCode);

  const [detail, setDetail] = useState({});

  useEffect(() => {
    getCountryDetails(countryCode).then((result) => {
      // console.log("result.data:", result.data);
      setDetail(result.data);
    });
  }, [countryCode]);
console.log(detail , 'detail')
  return (
      <div className="text-center mt-4">
        <img src={detail[0]?.flags?.png} alt={detail[0]?.name.common} />
        <p className="mt-3">Name:  {detail[0]?.name.common}</p>
        <p className="mt-3">Capital:  {detail[0]?.capital}</p>
        <p className="mt-3">population:  {detail[0]?.population}</p>
     </div>
    
  );
} 
