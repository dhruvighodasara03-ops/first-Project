import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Privacy from "../Privacy";
import Terms from "../Terms";
import User from "../User";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: (
          <>
            <Home />
          </>
        ),
      },
      {
        path: "/about",
        element: (
          <>
            <About />
          </>
        ),
      },
      {
        path: "/contact",
        element: (
          <>
            <Contact />
          </>
        ),
      },
      {
        path: "/privacy",
        element: (
          <>
            <Privacy />
          </>
        ),
      },
      {
        path: "/terms",
        element: (
          <>
            <Terms />
          </>
        ),
      },
      {
        path: "/user/:username",
        element: (
          <>
            <User />
          </>
        ),
      },
    ],
  },
]);
