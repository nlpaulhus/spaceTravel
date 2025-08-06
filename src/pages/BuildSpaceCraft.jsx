import BackButton from "../components/BackButton";
import "./BuildSpacecraft.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SpaceTravelApi from "../services/SpaceTravelApi";

const BuildSpacecraft = () => {
  let initialState = {
    name: "",
    capacity: 0,
    description: "",
    pictureUrl: "",
  };

  const [spacecraftData, setSpacecraftData] = useState(initialState);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await SpaceTravelApi.buildSpacecraft(spacecraftData);
      return navigate("/spacecrafts");
    } catch (err) {
      return err;
    }
  };

  const handleChange = (e) => {
    setSpacecraftData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="buildSpacecraft">
      <BackButton />
      <div className="buildSpacecraftFormDiv">
        <form className="buildSpacecraftForm">
          <input
            type="text"
            name="name"
            placeholder="Spacecraft Name"
            onChange={handleChange}
          />
          <input
            type="number"
            name="capacity"
            placeholder="Capacity"
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
          />
          <input
            type="text"
            name="pictureUrl"
            placeholder="pictureUrl (optional)"
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>
            BUILD
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuildSpacecraft;
