import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  Navigate,
  useNavigation,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import { Planets, planetsLoader } from "./pages/Planets";
import { SpaceCrafts, spacecraftsLoader } from "./pages/SpaceCrafts";
import NavBar from "./components/NavBar";
import BuildSpacecraft from "./pages/BuildSpaceCraft";
import { SpaceCraft, spacecraftLoader } from "./pages/SpaceCraft";
import Loading from "./components/Loading";

const Layout = () => {
  const navigation = useNavigation();

  return (
    <>
      <NavBar />
      {navigation.state === "loading" ? <Loading /> : <Outlet />}
    </>
  );
};

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route
      exact
      path="/spacecrafts"
      element={<SpaceCrafts />}
      loader={spacecraftsLoader}
    />
    <Route exact path="/spacecrafts/build" element={<BuildSpacecraft />} />
    <Route
      path="spacecrafts/:id"
      element={<SpaceCraft />}
      loader={spacecraftLoader}
    />
    <Route path="/planets" element={<Planets />} loader={planetsLoader} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Route>
);

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
