import React from "react";
import ReactDOM from "react-dom/client";
import ClaimListPage from "./ClaimListPage.jsx";
import "./Style/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import CreateClaimPage from "./CreateClaimPage.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/ClaimList",
    element: <ClaimListPage />,
  },
  {
    path: "/CreateClaim",
    element: <CreateClaimPage />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
