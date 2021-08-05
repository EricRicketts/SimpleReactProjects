import { render, screen, fireEvent } from '@testing-library/react';
import { classificationsAndAnimals } from "./javascript/data";
import App from './App';

describe('Test Selection Filter', function () {
  beforeEach(() => {
    render(<App classficatonsAndAnimals={classificationsAndAnimals} />)
  })
});