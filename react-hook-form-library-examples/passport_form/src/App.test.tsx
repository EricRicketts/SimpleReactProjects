import React from "react"
import { screen, render, fireEvent } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Checkboxes from "./components/checkboxes";

describe('Test Suite for entire Form', () => {
  const setup = (jsx: JSX.Element) => {
    return {
      user: userEvent.setup(),
      ...render(jsx),
    }
  }
  describe('Checkboxes tests', () => {})
    test('should toggle a single checkbox', async () => {
      const { user } = setup(<Checkboxes/>);
      const firstCheckbox = screen.getByLabelText('U.S. Passport Book');
      expect(firstCheckbox).not.toBeChecked();
      await user.click(firstCheckbox);
      expect(firstCheckbox).toBeChecked();
      await user.click(firstCheckbox);
      expect(firstCheckbox).not.toBeChecked();
    });
  
});
