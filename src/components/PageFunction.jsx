import "./PageFunction.css";

export const PageFunction = (props) => {
  return (
    <div className="functionBox">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};
