import "./PlanetBox.css";
import CurrentCraft from "./CurrentCraft";

const PlanetBox = ({ planet, spacecrafts, handlePlanetClick, handleCraftClick, stateData }) => {


  const selectedPlanetId = parseInt(stateData.targetPlanetId);
  const currentPlanet = parseInt(planet.id);

  return (
    <div className="planetBox">
      <div
        onClick={handlePlanetClick}
        id={planet.id}
        className={`planetInfo ${
          selectedPlanetId === currentPlanet ? "selected" : ""
        }`}
      >
        <img src={planet.pictureUrl}></img>
        <p>{planet.name}</p>
        <p>Population: {planet.currentPopulation}</p>
      </div>

      <div className="spacecraftsOnPlanet">
        {spacecrafts.map((spacecraft) => (
          <CurrentCraft
            stateData={stateData}
            handleCraftClick={handleCraftClick}
            key={spacecraft.id}
            craft={spacecraft}
          />
        ))}
      </div>
    </div>
  );
};

export default PlanetBox;
