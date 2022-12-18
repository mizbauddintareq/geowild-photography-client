import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const details = useLoaderData();
  const { name } = details;
  return (
    <div>
      <h1>This is service of {name}</h1>
    </div>
  );
};

export default ServiceDetails;
