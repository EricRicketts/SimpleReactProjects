import React from 'react';
import { render, screen } from '@testing-library/react';
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

  test("should have placeholder in select input", () => {
    render(<RegisterFields/>);
    expect(screen.getByLabelText("Gender")).toHaveDisplayValue("Select Gender");
  });
});