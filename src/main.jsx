import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ThemeProvider from "react-bootstrap/ThemeProvider";
import Layout from "./Component/Layout.jsx";
import Layout2 from "./Component/Layout2.jsx";
import Home from "./Page/Home.jsx";
import About from "./Page/About.jsx";
import Manage from "./Page/Manage.jsx";
import Payment from "./Page/Payment.jsx";
import Privacy from "./Page/Privacy.jsx";
import Favorite from "./Page/Favorite.jsx";
import Help from "./Page/Help.jsx";
import SignIn from "./Page/SignIn.jsx";
import SignUp from "./Page/SignUp.jsx";
import User from "./Page/User.jsx";
import Detail from "./Page/Detail.jsx";
import LayoutDetail from "./Component/LayoutDetail.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/about", element: <About /> },
      { path: "/manage", element: <Manage /> },
      { path: "/payment", element: <Payment /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "/favorite", element: <Favorite /> },
      { path: "/help", element: <Help /> },

      { path: "/user", element: <User /> },
    ],
  },
  {
    element: <Layout2 />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    element: <LayoutDetail />,
    children: [{ path: "/detail/:roomId", element: <Detail /> }],
  },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
      
    </ThemeProvider>
  </React.StrictMode>
);
