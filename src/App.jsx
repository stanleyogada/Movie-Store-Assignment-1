import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Login, Movies, Signup, SingleDetails, TVShows } from "./Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "movies",
    element: <Movies />,
  },
  {
    path: "tvshows",
    element: <TVShows />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "/:id",
    element: <SingleDetails />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
