import App from "./App";
import Profile from "./profile";
import ErrorPage from "./errorPage";

const router = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
];

export default router;