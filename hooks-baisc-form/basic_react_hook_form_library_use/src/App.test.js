import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import BasicUsageForm from './components/basic_usage_form';

describe("Test Basic Usage Form default render", function() {

  test("Should render the example label", function() {
    render(<BasicUsageForm/>);
    expect(screen.getByLabelText("Example")).toBeInTheDocument();
  });

  test("Should render the example input textbox", function() {
    render(<BasicUsageForm/>);
    expect(screen.getByRole("textbox", { name: /^example$/i })).toBeInTheDocument();
  });

  test("Should render the example required label", function() {
    render(<BasicUsageForm/>);
    expect(screen.getByLabelText("Example Required")).toBeInTheDocument();
  });

  test("Should render the example required textbox", function() {
    render(<BasicUsageForm/>);
    expect(screen.getByRole("textbox", { name: /Required/i })).toBeInTheDocument();
  });

  test("Should render the submit button", function() {
    render(<BasicUsageForm/>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("Should render default value of test in the example input", function() {
    render(<BasicUsageForm/>);
    expect(screen.getByRole("textbox", { name: /^example$/i })).toHaveValue("test");
  });
});