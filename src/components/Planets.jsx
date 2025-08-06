import { useLoaderData } from "react-router-dom";
import SpaceTravelApi from "../services/SpaceTravelApi";
import PlanetBox from "./PlanetBox";

export const Planets = () => {
  const planets = useLoaderData();
  return (
    <>
      <div>
        <a href="/planets/build">🏗️ Build a Planet</a>
      </div>
      {planets.map((planet) => (
        <PlanetBox pictureUrl={planet.pictureUrl} name={planet.name} key={planet.id} population={planet.currentPopulation}/>
      ))}
    </>
  );
};

export const planetsLoader = async () => {
  try {
    const res = await SpaceTravelApi.getPlanets();
    console.log(res.data);
    return res.data;
  } catch (err) {
    return err;
  }
};
