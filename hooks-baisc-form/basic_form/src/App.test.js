import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import {ContactFormControlled} from './components/contact_form_controlled';
import {ContactFormUncontrolled} from './components/contact_form_uncontrolled';

describe('Test Controlled Contact From', function() {

  afterEach(() => {
    cleanup();
  });

  test('Initial Rendering of controlled form', function() {
    render(<ContactFormControlled />);
    const labels = [
      'Name:', 'Email:', 'Message'
    ];
    labels.forEach(text => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  test('Initial values are empty', function() {
    render(<ContactFormControlled />);
    const ids = [
      'name', 'email', 'message'
    ];

    ids.forEach(id => {
      const element = screen.getByTestId(id);
      expect(element.value).toBe('');
    });
  });

  test('Set all fields and submit', function() {
    render(<ContactFormControlled />);
    const form = screen.getByTestId("contactFormControlled");
    const name = screen.getByTestId("name");
    name.value = 'Eric Ricketts';
    const email = screen.getByTestId('email')
    email.value = 'eric_ricketts@icloud.com';
    const message = screen.getByTestId("message");
    message.value = 'FooBar FizzBuzz';

    const expected = ['Eric Ricketts', 'eric_ricketts@icloud.com', 'FooBar FizzBuzz'];
    fireEvent.submit(form);
    const numberOfTestedElements = form.elements.length - 1;

    for (let index = 0; index < numberOfTestedElements; index++) {
      expect(form.elements[index].value).toBe(expected[index]);
    }
  });
});

describe('Test Uncontrolled Contact From', function() {

  afterEach(() => {
    cleanup();
  });

  test('Initial rendering of uncontrolled form', function() {
    render(<ContactFormUncontrolled />);
    const labels = [
      'Name:', 'Email:', 'Message'
    ];
    labels.forEach(text => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  test('Initial values are empty', function() {
    render(<ContactFormUncontrolled />);
    const ids = [
      'name', 'email', 'message'
    ];

    ids.forEach(id => {
      const element = screen.getByTestId(id);
      expect(element.value).toBe('');
    });
  });

  test('Set all fields and submit', function() {

  });
});