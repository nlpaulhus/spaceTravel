import "./SpaceCrafts.css";
import { useLoaderData } from "react-router-dom";
import SpaceTravelApi from "../services/SpaceTravelApi";
import CraftBox from "./CraftBox";

export function SpaceCrafts() {
  const spacecrafts = useLoaderData();
  return (
    <>
      <div className="buildLink">
        <a href="/spacecrafts/build">🏗️ Build a Spacecraft</a>
      </div>
      {spacecrafts.map((craft) => (
        <CraftBox key={craft.id} craft={craft} />
      ))}
    </>
  );
}

export const spacecraftsLoader = async () => {
  try {
    const res = await SpaceTravelApi.getSpacecrafts();
    console.log(res.data);
    return res.data;
  } catch (err) {
    return err;
  }
};
