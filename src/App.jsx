import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import HomePage from "./components/HomePage";
import Planets from "./components/Planets";
import SpaceCrafts from "./components/SpaceCrafts";
import { NavBar } from "./components/NavBar";

const Layout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="/spacecrafts" element={<SpaceCrafts />} />
    <Route path="/planets" element={<Planets />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Route>
);

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
