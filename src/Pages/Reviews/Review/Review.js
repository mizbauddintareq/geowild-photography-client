import { Card } from "react-bootstrap";

const Review = ({ data }) => {
  const { userName, userEmail, serviceName } = data;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{userName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{userEmail}</Card.Subtitle>
        <Card.Text>{serviceName}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Review;
