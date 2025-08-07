import BackButton from "../components/BackButton";
import "./BuildSpacecraft.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SpaceTravelApi from "../services/SpaceTravelApi";

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
      {errors.name && <span>{errors.name}</span>}
      {errors.capacity && <span>{errors.capacity}</span>}
      {errors.description && <span>{errors.description}</span>}
    </div>
  );
};

export default BuildSpacecraft;
