import { createBrowserRouter } from "react-router";
import Navbar from "../components/shared/Navbar";
import MainLayout from "../mainLayout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import TimelinePage from "../pages/timeline/TimelinePage";
import StatsPage from "../pages/stats/StatsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/timeline",
        element: <TimelinePage />,
      },
      {
        path: "/stats",
        element: <StatsPage />,
      },
    ],
  },
]);
