import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Splash from "./components/Splash";
import Home from "./components/Home";
import Material from "./components/Material";
import MaterialDetail from "./components/MaterialDetail";
import Quiz from "./components/Quiz";
import Gallery from "./components/Gallery";
import About from "./components/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Splash,
  },
  {
    path: "/app",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "material", Component: Material },
      { path: "material/:id", Component: MaterialDetail },
      { path: "quiz", Component: Quiz },
      { path: "gallery", Component: Gallery },
      { path: "about", Component: About },
    ],
  },
]);
