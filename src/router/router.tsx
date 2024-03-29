import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AreYouReady from "../pages/Project/AreYouReady";
import Preview from "../pages/Project/Preview";
import SinglePod from "../pages/Project/SinglePod";
import Podcast from "../pages/Project/Podcast";
import Memory from "../pages/Project/Memories/Memory";
import SingleMemory from "../pages/Project/Memories/SingleMemory";
import AccessDenied from "../pages/AccessDenied";
import Config from "../pages/Config";
import Average from "../pages/Average";
const router = createBrowserRouter([
  { path: "/check/", element: <Home /> },
  { path: "/check/project/preparation/", element: <AreYouReady /> },
  { path: "/check/project/podcast/", element: <Preview /> },
  { path: "/check/project/podcast/week/", element: <Podcast /> },
  { path: "/check/project/podcast/week/:id", element: <SinglePod /> },
  { path: "/check/project/memory/", element: <Memory /> },
  { path: "/check/project/memory/week/:id", element: <SingleMemory /> },
  { path: "/check/services", element: <AccessDenied /> },
  { path: "/check/gift/config", element: <Config /> },
  { path: "/check/project/average/", element: <Average /> },
]);

export default router;
