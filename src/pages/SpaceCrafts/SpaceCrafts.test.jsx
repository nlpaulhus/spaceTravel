import { render, screen, fireEvent } from "@testing-library/react";
import { SpaceCrafts } from "./SpaceCrafts";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { vi } from "vitest";

const mockLoaderData = [
  {
    id: "prispax",
    name: "Prispax",
    capacity: 10000,
    description:
      "Presenting the Astrolux Odyssey: a revolutionary spacecraft merging cutting-edge technology with lavish luxury, designed to usher 10,000 passengers into the solar system's embrace. A marvel of engineering, its sleek exterior is adorned with solar panels, fueling advanced propulsion while minimizing environmental impact." +
      "Within, the vessel transforms into a haven of opulence. Lavish suites offer cosmic panoramas, celestial artwork bedecks lounges, and sprawling gardens thrive in zero-gravity. Culinary excellence reigns in gourmet restaurants, while immersive theaters and VR chambers offer stellar entertainment." +
      "Safety remains paramount with cosmic radiation shielding and top-tier medical facilities. The Astrolux Odyssey not only advances space exploration but redefines elegance, uniting humanity's thirst for knowledge with a taste of the sublime.",
    pictureUrl: null,
    currentLocation: 2,
  },
  {
    id: "test",
    name: "Test Spacecraft",
    capacity: 1,
    description: "testy test test",
    pictureUrl: null,
    currentLocation: 1,
  },
];

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useLoaderData: () => mockLoaderData,
  };
});

const handleClick = vi.fn(() => "success");
const detailsHandler = vi.fn(() => "success");

describe("Spacecrafts Page", () => {
  it("renders the Spacecrafts page", () => {
    render(
      <MemoryRouter initialEntries={["/test"]}>
        <Routes>
          <Route path="/test" element={<SpaceCrafts />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Prispax")).toBeInTheDocument();
    expect(screen.getByText("Test Spacecraft")).toBeInTheDocument();
  });

  it("tests destroy button", () => {
    render(
      <MemoryRouter initialEntries={["/test"]}>
        <Routes>
          <Route path="/test" element={<SpaceCrafts />} />
        </Routes>
      </MemoryRouter>
    );

    const destroyButtons = screen.getAllByText(/destroy/i);
    expect(destroyButtons.length).toBe(2);

    fireEvent.click(destroyButtons[0]);
    handleClick.mock.calls.length === 1;
  });

  it("tests details", () => {
    render(
      <MemoryRouter initialEntries={["/test"]}>
        <Routes>
          <Route path="/test" element={<SpaceCrafts />} />
        </Routes>
      </MemoryRouter>
    );

    const detailsButtons = screen.getAllByRole("img");
    expect(detailsButtons.length).toBe(2);

    fireEvent.click(detailsButtons[0]);
    detailsHandler.mock.calls.length === 1;
  });
});
