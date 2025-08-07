import { useLoaderData } from "react-router-dom";
import SpaceTravelApi from "../services/SpaceTravelApi";
import PlanetBox from "../components/PlanetBox";
import { useState, useEffect } from "react";
import "./Planets.css";
import CurrentCraft from "../components/CurrentCraft";

export const Planets = () => {
  const planetsAndCrafts = useLoaderData();
  const planets = planetsAndCrafts.planets.data;
  const spacecrafts = planetsAndCrafts.spacecrafts.data;

  let planetsData = [[], [], [], [], [], [], [], [], []];

  for (let i = 0; i < spacecrafts.length; i++) {
    let currentCraftLocation = spacecrafts[i].currentLocation;
    planetsData[currentCraftLocation].push(spacecrafts[i]);
  }

  return (
    <>
      {planets.map((planet) => (
        <PlanetBox
          key={planet.id}
          planet={planet}
          spacecrafts={planetsData[planet.id]}
        />
      ))}
    </>
  );
};

export const planetsLoader = async () => {
  try {
    const planets = await SpaceTravelApi.getPlanets();
    const spacecrafts = await SpaceTravelApi.getSpacecrafts();

    return { planets: planets, spacecrafts: spacecrafts };
  } catch (err) {
    return err;
  }
};
