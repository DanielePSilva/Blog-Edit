import { createBrowserRouter } from "react-router-dom";
import PostPage from "./pages/post";
import RootPage from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "/post/:id",
    element: <PostPage />,
  },
]);
