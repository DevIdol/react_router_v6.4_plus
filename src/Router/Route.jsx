import React, { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SideBar from "../components/SideBar";
import NotFound from "../components/NotFound";
import Contact from "../components/Contact";

const Route = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SideBar />,
      errorElement: <NotFound />,
      children: [
        {
          path: "contacts/:contactId",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
};

export default Route;
