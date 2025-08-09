import { render, screen, fireEvent } from "@testing-library/react";
import BuildSpaceCraft from "./BuildSpaceCraft";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

const MockBuildSpaceCraft = () => {
  return (
    <MemoryRouter>
      <BuildSpaceCraft />
    </MemoryRouter>
  );
};

const handleClick = vi.fn(() => "success");

describe("Build SpaceCraft Page", () => {
  it("renders the Build Spacecraft Page and form", () => {
    render(<MockBuildSpaceCraft />);
    screen.getByPlaceholderText(/spacecraft name/i).expect;
    expect(screen.getByPlaceholderText(/capacity/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/description/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/optional picture url/i)
    ).toBeInTheDocument();
  });

  it("should be able to type into inputs", () => {
    render(<MockBuildSpaceCraft />);

    const nameInput = screen.getByPlaceholderText(/spacecraft name/i);
    fireEvent.change(nameInput, { target: { value: "Sadie" } });
    expect(nameInput.value).toBe("Sadie");

    const capacityInput = screen.getByPlaceholderText(/capacity/i);
    fireEvent.change(capacityInput, { target: { value: "40" } });
    expect(capacityInput.value).toBe("40");

    const descriptionInput = screen.getByPlaceholderText(/description/i);
    fireEvent.change(descriptionInput, { target: { value: "small" } });
    expect(descriptionInput.value).toBe("small");

    const pictureInput = screen.getByPlaceholderText(/optional picture url/i);
    fireEvent.change(pictureInput, { target: { value: "picture.com" } });
    expect(pictureInput.value).toBe("picture.com");
  });

  it("should be able to submit form", () => {
    render(<MockBuildSpaceCraft />);
    const buildButton = screen.getByText(/build/i);
    const nameInput = screen.getByPlaceholderText(/spacecraft name/i);
    fireEvent.click(buildButton);
    handleClick.mock.calls.length === 1;
  });
});
