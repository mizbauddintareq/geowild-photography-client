import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Service from "../Home/Service/Service";

const AllServices = () => {
  const allServices = useLoaderData();
  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {allServices?.map((service) => (
          <Service key={service._id} data={service} />
        ))}
      </Row>
    </div>
  );
};

export default AllServices;
