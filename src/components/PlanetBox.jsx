import "./PlanetBox.css";
import CurrentCraft from "./CurrentCraft";

const PlanetBox = ({ planet, spacecrafts, setStateData, stateData }) => {
  const planetHandler = (e) => {
    let planetId = parseInt(e.currentTarget.id);
    setStateData({ ...stateData, targetPlanetId: planetId });
  };

  const selectedPlanetId = parseInt(stateData.targetPlanetId);
  const currentPlanet = parseInt(planet.id);

  return (
    <div className="planetBox">
      <div
        onClick={planetHandler}
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
            key={spacecraft.id}
            craft={spacecraft}
            setStateData={setStateData}
          />
        ))}
      </div>
    </div>
  );
};

export default PlanetBox;
