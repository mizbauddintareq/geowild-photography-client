import { Card, Col } from "react-bootstrap";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const Service = ({ data }) => {
  return (
    <Col>
      <Card className="h-100">
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
          <PhotoView src={data?.img}>
            <img src={data?.img} alt="" />
          </PhotoView>
        </PhotoProvider>

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
