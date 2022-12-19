import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Reviews from "../Reviews/Reviews/Reviews";
const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const details = useLoaderData();
  const { name, img, _id } = details;
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={8}>
          <Card>
            <Card.Header>{name}</Card.Header>
            <PhotoProvider
              variant="top"
              className="card-img"
              speed={() => 800}
              easing={(type) =>
                type === 2
                  ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                  : "cubic-bezier(0.34, 1.56, 0.64, 1)"
              }
            >
              <PhotoView src={img}>
                <img src={img} alt="" />
              </PhotoView>
            </PhotoProvider>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>

              {user?.uid ? (
                <Link to={`/review/${_id}`}>
                  <Button variant="primary">Add review</Button>
                </Link>
              ) : (
                <Link to="/login">
                  <Button variant="primary">Please login to add review</Button>
                </Link>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Reviews serviceName={name} />
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceDetails;
