import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import HomePage from "./components/HomePage";
import { Planets, planetsLoader } from "./components/Planets";
import { SpaceCrafts, spacecraftsLoader } from "./components/SpaceCrafts";
import NavBar from "./components/NavBar";
import BuildPlanet from "./components/BuildPlanet";
import BuildSpaceCraft from "./components/BuildSpaceCraft";
import { SpaceCraft, spacecraftLoader } from "./components/SpaceCraft";

const Layout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route
      exact
      path="/spacecrafts"
      element={<SpaceCrafts />}
      loader={spacecraftsLoader}
    />
    <Route exact path="/spacecrafts/build" element={<BuildSpaceCraft />} />
    <Route
      path="spacecrafts/:id"
      element={<SpaceCraft />}
      loader={spacecraftLoader}
    />
    <Route path="/planets" element={<Planets />} loader={planetsLoader} />
    <Route path="/planets/build" element={<BuildPlanet />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Route>
);

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
