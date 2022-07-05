import React from 'react';

function ContactFormUncontrolled() {
  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const messageRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} data-testid="contactFormUncontrolled">
      <div>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          data-testid="name"
          type="text"
          ref={nameRef}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          data-testid="email"
          type="email"
          ref={emailRef}
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <input
          id="message"
          data-testid="message"
          ref={messageRef}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export { ContactFormUncontrolled }