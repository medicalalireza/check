import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AreYouReady from "../pages/Project/AreYouReady";
import Preview from "../pages/Project/Preview";
import SinglePod from "../pages/Project/SinglePod";
import Podcast from "../pages/Project/Podcast";
const router = createBrowserRouter([
  { path: "/check/", element: <Home /> },
  { path: "/check/project/preparation/", element: <AreYouReady /> },
  { path: "/check/project/podcast/", element: <Preview /> },
  { path: "/check/project/podcast/week/", element: <Podcast /> },
  { path: "/check/project/podcast/week/:id", element: <SinglePod /> },
]);

export default router;
