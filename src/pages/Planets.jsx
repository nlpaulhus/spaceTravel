import { useLoaderData, useNavigate } from "react-router-dom";
import SpaceTravelApi from "../services/SpaceTravelApi";
import PlanetBox from "../components/PlanetBox";
import { useState, useEffect } from "react";

export const Planets = () => {
  const planetsAndCrafts = useLoaderData();
  const planets = planetsAndCrafts.planets;
  const spacecrafts = planetsAndCrafts.spacecrafts;

  const navigate = useNavigate();

  const initialState = {
    spacecraftId: null,
    targetPlanetId: null,
  };

  let [stateData, setStateData] = useState(initialState);

  if (stateData.spacecraftId !== null && stateData.targetPlanetId !== null) {
    try {
      const res = SpaceTravelApi.sendSpacecraftToPlanet(stateData);
      setStateData(initialState);
      return navigate("/planets");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {}, [stateData]);

  return (
    <>
      {planets.map((planet) => (
        <PlanetBox
          stateData={stateData}
          setStateData={setStateData}
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
