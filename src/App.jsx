import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Company from "./pages/Company";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about/team",
    element: <Team />,
  },
  {
    path: "/about/company",
    element: <Company />,
  },
]);

export default function App() {
  return (
    <div className="bg-neutral-1000 ">
      <RouterProvider router={router} />
    </div>
  );
}
