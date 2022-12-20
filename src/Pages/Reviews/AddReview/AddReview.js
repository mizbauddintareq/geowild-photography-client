import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const serviceDetails = useLoaderData();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("https://geowild-photography-server.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <h1>Please add a review</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user?.displayName} {...register("userName")} />
        <br /> <br />
        <input
          type="email"
          defaultValue={user?.email}
          {...register("userEmail")}
        />
        <br /> <br />
        <input
          defaultValue={serviceDetails?.name}
          {...register("serviceName")}
        />
        <br /> <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddReview;
