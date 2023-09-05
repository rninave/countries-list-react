import Card from "react-bootstrap/Card";

export default function CountryCard(props) {
  return (
    <>
      <div className="mx-2 mb-3">
        <Card  className="h-100 w-18rem">
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
