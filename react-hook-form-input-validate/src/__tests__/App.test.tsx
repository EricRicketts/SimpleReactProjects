import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../test-utils";
import { App } from "../App";

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
    describe("Test Initial Name Values", function () {});
    test("should render the last name input", () => {
      render(<App />);
      expect(screen.getByLabelText(/Last Name/)).toBeInTheDocument();
    });

    test("should have empty string for last name to begin with", () => {
      render(<App />);
      expect(screen.getByLabelText(/Last Name/)).toBeEmptyDOMElement();
    });
  });

  describe("Test All Name Inputs", () => {
    test("should require the last name", async () => {
      const user = userEvent.setup();
      render(<App />);
      expect(document.body).toHaveFocus();
      await user.tab();
      expect(screen.getByLabelText(/Last Name/)).toHaveFocus();
      await user.tab();
      expect(screen.getByText(/Last Name is required/)).toBeInTheDocument();
    });

    test("should require at least two letters", async () => {
      const user = userEvent.setup();
      render(<App />);
      const lastNameInput = screen.getByLabelText(/Last Name/);
      await user.type(lastNameInput, "F");
      expect(lastNameInput).toHaveValue("F");
      await user.tab();
      expect(screen.getByText(/and at least two letters/)).toBeInTheDocument();
    });

    test("should only allow letters", async () => {
      const user = userEvent.setup();
      render(<App />);
      const lastNameInput = screen.getByLabelText(/Last Name/);
      await user.type(lastNameInput, "Foo1Bar");
      expect(lastNameInput).toHaveValue("Foo1Bar");
      await user.tab();
      expect(screen.getByText(/must be only letters/)).toBeInTheDocument();
    });
  });
});
