import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Career from "../pages/carreer/Career";
import News from "../components/news/News";
import Categories from "../components/cateogries/Categories";
import NewsDetails from "../components/newsDetails/NewsDetails";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

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
            loader: () => fetch(`http://localhost:4000/news`),
          },
          {
            path: "/categories/:id",
            element: <Categories />,
            loader: ({ params }) =>
              fetch(`http://localhost:4000/categories/${params.id}`),
          },
        ],
      },
      {
        path: "news/:id",
        element: <NewsDetails />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "career",
        element: <Career />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
