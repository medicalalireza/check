import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AreYouReady from "../pages/Project/AreYouReady";
import Preview from "../pages/Project/Preview";
const router = createBrowserRouter([
  { path: "/check/", element: <Home /> },
  { path: "/check/project/preparation/", element: <AreYouReady /> },
  { path: "/check/project/podcast/", element: <Preview /> },
]);

export default router;
