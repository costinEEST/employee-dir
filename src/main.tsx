import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Employee from "./components/Employee";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>The home page</p>,
  },
  {
    path: "employees/:employeeId",
    element: <Employee />,
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
