import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import AddService from "../../Pages/AddService/AddService";
import AllServices from "../../Pages/AllServices/AllServices";
import Login from "../../Pages/Authentication/Login/Login";
import Registration from "../../Pages/Authentication/Registration/Registration";
import Home from "../../Pages/Home/Home/Home";

import NotFound404 from "../../Pages/NotFound404/NotFound404";
import AddReview from "../../Pages/Reviews/AddReview/AddReview";
import EditReview from "../../Pages/Reviews/EditReview/EditReview";
import MyReviews from "../../Pages/Reviews/MyReviews/MyReviews";
import Reviews from "../../Pages/Reviews/Reviews/Reviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";

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
        path: "addService",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/services/all",
        loader: () =>
          fetch("https://geowild-photography-server.vercel.app/services/all"),
        element: <AllServices />,
      },
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(
            `https://geowild-photography-server.vercel.app/service/${params.id}`
          ),
        element: <ServiceDetails />,
      },
      {
        path: "review/:id",
        loader: ({ params }) =>
          fetch(
            `https://geowild-photography-server.vercel.app/service/${params.id}`
          ),
        element: <AddReview />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "myReviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/editReview/:id",
        loader: ({ params }) =>
          fetch(
            `https://geowild-photography-server.vercel.app/review/${params.id}`
          ),
        element: <EditReview />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound404 />,
  },
]);
