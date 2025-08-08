import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import { SpaceCrafts } from "../pages/SpaceCrafts/SpaceCrafts";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);
  });
});

describe("Homepage", () => {
  it("renders the Homepage", () => {
    render(<HomePage />);
    const paragraphs = screen.getAllByRole("paragraph");
    expect(paragraphs.length).toBe(5);
  });
});

describe("Spacecrafts", async () => {
  it("renders the Spacecrafts page", () => {
    render(<SpaceCrafts />);
  });
});
