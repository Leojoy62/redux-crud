import { createBrowserRouter } from "react-router-dom";

import ShowBooks from "../Pages/ShowBooks";
import AddBooks from "../Pages/AddBooks";
import Main from "../Layouts/Main";
import EditBook from "../Pages/EditBook";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <ShowBooks></ShowBooks>,
      },
      {
        path: "/add-book",
        element: <AddBooks></AddBooks>,
      },
      {
        path: "/edit-book",
        element: <EditBook></EditBook>,
      },
    ],
  },
]);
