import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./mainLayout/MainLayout";
import { RouterProvider } from "react-router";
import { router } from "./router/Routes";
import FriendsTimelineProvider from "./context/FriendsTimelineProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendsTimelineProvider>
      <RouterProvider router={router} />
    </FriendsTimelineProvider>
  </StrictMode>,
);
