import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Homepage", () => {
  it("renders the Homepage", () => {
    render(<HomePage />);
    const paragraphs = screen.getAllByRole("paragraph");
    expect(paragraphs.length).toBe(5);
  });
});
