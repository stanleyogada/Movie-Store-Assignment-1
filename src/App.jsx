import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  Login,
  Movies,
  Signup,
  SingleDetails,
  TVShows,
  UserDashboard,
} from "./Pages";
import Search from "./Pages/Search";

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
  {
    path: "/me",
    element: <UserDashboard />,
  },
  {
    path: "/search",
    element: <Search />,
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
