import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../test-utils";
import { App } from "../App";
import { useRadio } from "@chakra-ui/react";

describe("Test Suite", () => {
  /*
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  */
  describe("Test Initial Values,", () => {
    let user;
    beforeEach(() => {
      user = userEvent.setup();
      render(<App/>);
    });

    describe("Test Initial Name Values", function () {

    });
    test("should render the last name input", () => {
      expect(screen.getByLabelText(/Last Name/)).toBeInTheDocument();
    });

    test("should have empty string for last name to begin with", () => {
      expect(screen.getByLabelText(/Last Name/)).toBeEmptyDOMElement();
    });
  });

  describe("Test All Name Inputs", () => {
    test("should require the last name", async () => {
      expect(2).toBe(2);
    });
  });
});
