import "./PlanetBox.css";
import CurrentCraft from "./CurrentCraft";

const PlanetBox = ({ planet, spacecrafts }) => {
  return (
    <div className="planetBox">
      <div className="planetInfo">
        <img src={planet.pictureUrl}></img>
        <p>{planet.name}</p>
        <p>Population: {planet.currentPopulation}</p>
      </div>

      <div className="spacecraftsOnPlanet">
        {spacecrafts.map((spacecraft) => (
          <CurrentCraft craft={spacecraft} />
        ))}
      </div>
    </div>
  );
};

export default PlanetBox;
