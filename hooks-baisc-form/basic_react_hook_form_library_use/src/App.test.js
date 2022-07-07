import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import BasicUsageForm from './components/basic_usage_form';

describe("Test the first react hook form example", function() {

  test("Should render the basic fields", () => {
    render(<BasicUsageForm />);
    expect(screen.getByRole("textbox", { name: /^example$/i} )).toBeInTheDocument();
  });
});