import "./PlanetBox.css";

const PlanetBox = (props) => {
  return (
    <div className="planetBox">
      <div className="planetInfo">
        <img src={props.pictureUrl}></img>
        <p>{props.name}</p>
        <p>Population: {props.population}</p>
      </div>
    </div>
  );
};

export default PlanetBox;
