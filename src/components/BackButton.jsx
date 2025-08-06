import { useNavigate } from "react-router-dom";
import "./BackButton.css"

const BackButton = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };

  return <button className="backButton" onClick={goBackHandler}>Back</button>;
};

export default BackButton;
