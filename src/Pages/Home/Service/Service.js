import { Card, Col } from "react-bootstrap";

const Service = ({ data }) => {
  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={data?.img} />
        <Card.Body>
          <Card.Title>{data?.name}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
