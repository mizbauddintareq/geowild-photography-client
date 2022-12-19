import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data);
      })
      .catch((err) => console.error(err));
  }, [user?.email]);

  return (
    <div>
      <h1>Total reviews {myReviews?.length}</h1>
    </div>
  );
};

export default MyReviews;
