import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Career from "../pages/carreer/Career";
import News from "../components/news/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <News />,
            loader: () => fetch(`http://localhost:4000/news`)
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "career",
        element: <Career />,
      },
    ],
  },
]);

export default router;
