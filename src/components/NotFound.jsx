import React from "react";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h3>404 | Page Not Found!</h3>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default NotFound;
