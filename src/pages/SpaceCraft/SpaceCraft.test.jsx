import { render, screen, fireEvent } from "@testing-library/react";
import { SpaceCraft } from "./SpaceCraft";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { vi } from "vitest";

const mockLoaderData = {
  id: "prispax",
  name: "Prispax",
  capacity: 10000,
  description:
    "Presenting the Astrolux Odyssey: a revolutionary spacecraft merging cutting-edge technology with lavish luxury, designed to usher 10,000 passengers into the solar system's embrace. A marvel of engineering, its sleek exterior is adorned with solar panels, fueling advanced propulsion while minimizing environmental impact." +
    "Within, the vessel transforms into a haven of opulence. Lavish suites offer cosmic panoramas, celestial artwork bedecks lounges, and sprawling gardens thrive in zero-gravity. Culinary excellence reigns in gourmet restaurants, while immersive theaters and VR chambers offer stellar entertainment." +
    "Safety remains paramount with cosmic radiation shielding and top-tier medical facilities. The Astrolux Odyssey not only advances space exploration but redefines elegance, uniting humanity's thirst for knowledge with a taste of the sublime.",
  pictureUrl: null,
  currentLocation: 2,
};

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useLoaderData: () => mockLoaderData,
  };
});

const goBackHandler = vi.fn(() => "success");

describe("Spacecraft Page", () => {
  it("renders the Spacecraft page", () => {
    render(
      <MemoryRouter initialEntries={["/test"]}>
        <Routes>
          <Route path="/test" element={<SpaceCraft />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Prispax")).toBeInTheDocument();

    expect(screen.getByText("Back")).toBeInTheDocument();

    const description = screen.getAllByText(/Astrolux/i);

    expect(description.length).toBe > 0;
  });

  it("checks the back button", () => {
    render(
      <MemoryRouter initialEntries={["/test"]}>
        <Routes>
          <Route path="/test" element={<SpaceCraft />} />
        </Routes>
      </MemoryRouter>
    );

    const backButton = screen.getByText("Back");

    fireEvent.click(backButton);
    goBackHandler.mock.calls.length === 1;
  });
});
