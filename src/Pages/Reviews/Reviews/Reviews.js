import { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = ({ serviceName }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?service=${serviceName}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [serviceName]);

  return (
    <div>
      {reviews.length === 0 ? (
        <h1>No reviews Found</h1>
      ) : (
        <>
          {reviews?.map((review) => (
            <Review key={review._id} data={review} />
          ))}
        </>
      )}
    </div>
  );
};

export default Reviews;
