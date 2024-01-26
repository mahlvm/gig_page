import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Gig from "../src/components/Gig";


test("Test Gig component", () => {
    // Setup - rendering the component on the page
    const props = {
        name: "Test Band", 
        description: "Test Description",
        time: "Test Time",
        location: "Test Local",
    };


    render(<Gig {...props} />);

    // Assert
    expect(screen.getByText(props.name)).toHaveTextContent(props.name);
    expect(screen.getByText(props.description)).toHaveTextContent(props.description);
    expect(screen.getByText(props.time)).toHaveTextContent(props.time);
    expect(screen.getByText(props.location)).toHaveTextContent(props.location);

});