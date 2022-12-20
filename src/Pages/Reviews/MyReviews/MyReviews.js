import { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import { AuthContext } from "../../../context/AuthProvider";

const MyReviews = () => {
  const { user, userLogOut } = useContext(AuthContext);

  const [myReviews, setMyReviews] = useState();

  useEffect(() => {
    fetch(
      `https://geowild-photography-server.vercel.app/myReviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("geo-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 403 || res.status === 401) {
          return userLogOut();
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMyReviews(data);
      })
      .catch((err) => console.error(err));
  }, [user?.email, userLogOut]);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://geowild-photography-server.vercel.app/review/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount > 0) {
              const remaining = myReviews.filter((review) => review._id !== id);
              setMyReviews(remaining);
              Swal.fire("Deleted!", "review has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <h1>Total reviews {myReviews?.length}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Delete/Edit</th>
          </tr>
        </thead>
        <tbody>
          {myReviews?.map((review) => (
            <tr key={review._id}>
              <td>{review.userName}</td>
              <td>{review.serviceName}</td>
              <td>{review.userEmail}</td>
              <td>
                <button onClick={() => handleDelete(review._id)}>delete</button>
                <Link to={`/editReview/${review._id}`}>
                  <button>edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyReviews;
