import "./PageFunction.css";

export const PageFunction = ({title, description}) => {
  return (
    <div className="functionBox">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
