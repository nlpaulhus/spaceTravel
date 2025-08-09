import BackButton from "../../components/BackButton/BackButton";
import "./BuildSpacecraft.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SpaceTravelApi from "../../services/SpaceTravelApi";

const BuildSpacecraft = () => {
  let initialState = {
    name: "",
    capacity: null,
    description: "",
    pictureUrl: "",
  };

  const [spacecraftData, setSpacecraftData] = useState(initialState);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  //function to check form data and return errors object
  const validateForm = (data) => {
    const errors = {};

    console.log(Number.isInteger(data.capacity));
    if (!data.name) {
      errors.name = "Spacecraft name is required";
    }
    if (!data.capacity) {
      errors.capacity = "Spacecraft capactiy is required";
    } else if (Number.isInteger(data.capacity) === false) {
      errors.capacity = "Spacecraft capacity must be a whole number";
    }
    if (!data.description) {
      errors.description = "Spacecraft description is required";
    }
    return errors;
  };

  //on submit, it validates the form and if there are errors, sets them in state, if not it submits the form

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm(spacecraftData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      try {
        const res = await SpaceTravelApi.buildSpacecraft(spacecraftData);
        return navigate("/spacecrafts");
      } catch (err) {
        return err;
      }
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
        <form name="buildSpacecraftForm" className="buildSpacecraftForm">
          <input
            type="text"
            name="name"
            placeholder="Spacecraft Name"
            value={spacecraftData.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="capacity"
            placeholder="Capacity"
            vallue={spacecraftData.capacity}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={spacecraftData.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="pictureUrl"
            placeholder="Optional Picture URL"
            value={spacecraftData.pictureUrl}
            onChange={handleChange}
          />
          <button name="buildButton" role="button" type="submit" onClick={handleSubmit}>
            BUILD
          </button>
        </form>
      </div>
      {errors.name && <span>{errors.name}</span>}
      {errors.capacity && <span>{errors.capacity}</span>}
      {errors.description && <span>{errors.description}</span>}
    </div>
  );
};

export default BuildSpacecraft;
