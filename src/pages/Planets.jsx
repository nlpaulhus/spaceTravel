import { useLoaderData } from "react-router-dom";
import SpaceTravelApi from "../services/SpaceTravelApi";
import PlanetBox from "../components/PlanetBox";
import "./Planets.css";
import CurrentCraft from "../components/CurrentCraft";

export const Planets = () => {
  const planetsAndCrafts = useLoaderData();
  const planets = planetsAndCrafts.planets;
  const spacecrafts = planetsAndCrafts.spacecrafts;

  return (
    <>
      {planets.map((planet) => (
        <PlanetBox
          key={planet.id}
          planet={planet}
          spacecrafts={spacecrafts[planet.id]}
        />
      ))}
    </>
  );
};

export const planetsLoader = async () => {
  try {
    const planets = await SpaceTravelApi.getPlanets().then(
      (planets) => planets.data
    );
    const spacecrafts = await SpaceTravelApi.getSpacecrafts().then(
      (spacecrafts) => spacecrafts.data
    );

    let spacecraftsData = [[], [], [], [], [], [], [], [], []];

    for (let i = 0; i < spacecrafts.length; i++) {
      let currentCraftLocation = spacecrafts[i].currentLocation;
      spacecraftsData[currentCraftLocation].push(spacecrafts[i]);
    }

    return { planets: planets, spacecrafts: spacecraftsData };
  } catch (err) {
    return err;
  }
};
