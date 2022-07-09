import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { storeData, RegisterFields } from './components/register_fields';

describe("Register Fields Initialization", () => {
  afterEach(() => {
    storeData.submitArray = [];
  });

  test("Should have an empty first name", () => {
    render(<RegisterFields/>);
    expect(screen.getByLabelText("First Name")).toBeEmptyDOMElement();
  });

  test("Should have placeholder in select input", () => {
    render(<RegisterFields/>);
    expect(screen.getByLabelText("Gender")).toHaveDisplayValue("Select Gender");
  });
});

describe("Register Fields Form Inputs", () => {
  afterEach(() => {
    storeData.submitArray = [];
  });

  test("Should set the text input value", () => {
    render(<RegisterFields/>);
    fireEvent.change(screen.getByLabelText("First Name"),
      { target: { value: 'FizzBuzz'}
    });
    const input = screen.getByLabelText("First Name");
    expect(input).toHaveDisplayValue("FizzBuzz");
  });

  test("Should set a select value", () => {
    render(<RegisterFields/>);
    fireEvent.change(screen.getByLabelText("Gender"),
      { target: { value: "male"}
    });
    const select = screen.getByLabelText("Gender");
    expect(select).toHaveDisplayValue("male");
  });
});