import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import AllServices from "../../Pages/AllServices/AllServices";
import Login from "../../Pages/Authentication/Login/Login";
import Registration from "../../Pages/Authentication/Registration/Registration";
import Home from "../../Pages/Home/Home/Home";

import NotFound404 from "../../Pages/NotFound404/NotFound404";
import AddReview from "../../Pages/Reviews/AddReview/AddReview";
import MyReviews from "../../Pages/Reviews/MyReviews/MyReviews";
import Reviews from "../../Pages/Reviews/Reviews/Reviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "/services/all",
        loader: () => fetch("http://localhost:5000/services/all"),
        element: <AllServices />,
      },
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
        element: <ServiceDetails />,
      },
      {
        path: "review/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
        element: <AddReview />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "myReviews",
        element: <MyReviews />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound404 />,
  },
]);
