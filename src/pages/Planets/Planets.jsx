import { useLoaderData, useNavigate } from "react-router-dom";
import SpaceTravelApi from "../../services/SpaceTravelApi";
import PlanetBox from "../../components/PlanetBox/PlanetBox"
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

  const handleCraftClick = (e) => {
    const spacecraftId = e.currentTarget.id;
    setStateData({ ...stateData, spacecraftId: spacecraftId });
  };

  const handlePlanetClick = (e) => {
    let planetId = parseInt(e.currentTarget.id);
    setStateData({ ...stateData, targetPlanetId: planetId });
  };

  //if a spacecraft and planet have been selected

  useEffect(() => {
    if (stateData.spacecraftId !== null && stateData.targetPlanetId !== null) {
      let spacecraftsOnTargetPlanet = spacecrafts[stateData.targetPlanetId];
      let idsOfPlanetCrafts = [];

      for (const spacecraft of spacecraftsOnTargetPlanet) {
        idsOfPlanetCrafts.push(spacecraft.id);
      }

      //only runs if the spacecraft is not already on the selected planet:

      if (idsOfPlanetCrafts.includes(stateData.spacecraftId) === false) {
        try {
          const res = SpaceTravelApi.sendSpacecraftToPlanet(stateData);
          setStateData(initialState);
          return navigate("/planets");
        } catch (err) {
          console.log(err);
        }
      }
    }
  }, [stateData]);

  return (
    <>
      {planets.map((planet) => (
        <PlanetBox
          stateData={stateData}
          handlePlanetClick={handlePlanetClick}
          handleCraftClick={handleCraftClick}
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

    //organizes spacecrafts based on which planet they are by planet index

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
