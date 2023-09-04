import Card from "react-bootstrap/Card";

export default function CountryCard(props) {
  return (
    <>
    
        <div className="mx-2 mb-3">
        <Card style={{ width: "18rem" }} className="h-100">
          <Card.Img  src={props.flagurl}/>
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.capital}</Card.Text>
            <Card.Text>{props.population}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      
  
    
    </>
  );
}
