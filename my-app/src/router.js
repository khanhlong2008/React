import Home from "./Components/Home";
import About from "./Components/About";
import Cotact from "./Components/Contact";
import NotFound from "./Components/NotFound";
import React from "react";

const router = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/about",
    exact: false,
    main: () => <About />,
  },
  {
    path: "/cotact",
    exact: false,
    main: () => <Cotact />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default router;
