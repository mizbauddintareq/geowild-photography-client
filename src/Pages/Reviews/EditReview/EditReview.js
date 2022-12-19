import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const EditReview = () => {
  const { register, handleSubmit } = useForm();
  const review = useLoaderData();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/review/${data.id}`, {
      method: "PUT",
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input value={review._id} {...register("id")} />
        <br /> <br />
        <input defaultValue={review.userName} {...register("userName")} />
        <br /> <br />
        <input defaultValue={review.userEmail} {...register("userEmail")} />
        <br /> <br />
        <input defaultValue={review.serviceName} {...register("serviceName")} />
        <br /> <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default EditReview;
