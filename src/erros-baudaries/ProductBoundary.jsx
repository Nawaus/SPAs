import { isRouteErrorResponse } from "react-router";
import { useRouteError } from "react-router-dom";

export default function ProductBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return <h2>Oops... product not found =(</h2>;
        break;
      case 401:
        return <h2>You are not allowed to see this page</h2>;
        break;
      case 401:
        return <h2>Hmmmm looks something went wrong</h2>;
        break;
      case 500:
        return <h2>Internal error nine</h2>;
        break;
      default:
        break;
    }
  }

  return <h2>Something went wrong</h2>;
}
