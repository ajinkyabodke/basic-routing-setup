import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Company from "./pages/Company";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import LoginPage from "./pages/Login";
import Notfound from "./pages/Notfound";

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
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/contact/*",
    element: <ProtectedRoute path="/contact" element={<Contact />} />,
  },
  {
    path: "/about/team/:teamId", // Define a route parameter ":teamId"
    element: <Team />,
  },
  {
    path: "/about/company/:companyId", // Define a route parameter ":companyId"
    element: <Company />,
  },
  {
    path: "/*",
    element: <Notfound />,
  },
]);

export default function App() {
  return (
    <div className="bg-neutral-1000 ">
      <AuthProvider>
        <RouterProvider router={router} fallbackElement={<div>40444444</div>} />
      </AuthProvider>
    </div>
  );
}
