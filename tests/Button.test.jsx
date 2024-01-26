import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FavoriteButton from "../src/components/Button";


test("renders with initial state of not favorited", () => {
    render(<FavoriteButton />);
    expect(screen.getByRole("button")).toHaveTextContent("🤘 FAVORITE BAND");
});

test("renders with state after clicking", async () => {
    render(<FavoriteButton />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveTextContent("👎 DISLIKE");
});

test("toggles state after clicking twice", async () => {
    render(<FavoriteButton />);
    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveTextContent("🤘 FAVORITE BAND");
});