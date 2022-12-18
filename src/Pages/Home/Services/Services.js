import { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";

import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {services?.map((service) => (
          <Service key={service._id} data={service} />
        ))}
      </Row>
      <div>
        <Button variant="primary">See all</Button>
      </div>
    </Container>
  );
};

export default Services;
