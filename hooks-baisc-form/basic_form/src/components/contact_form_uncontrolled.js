import React from 'react';

function ContactFormUncontrolled() {
  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const messageRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("name: ", nameRef.current.value);
    console.log("email: ", emailRef.current.value);
    console.log("message: ", messageRef.current.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          ref={nameRef}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email"
          ref={emailRef}
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <input
          id="message"
          ref={messageRef}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export { ContactFormUncontrolled }