import React from 'react';

function ContactFormControlled() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

    return (
        <form onSubmit={handleSubmit} data-testid="contactFormControlled">
            <div>
                <label htmlFor="name">Name: </label>
                <input
                  id="name"
                  data-testid="name"
                  type="text"
                  value={name}
                  onChange={((e) => setName(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input
                  id="email"
                  data-testid="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  data-testid="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <button data-testid="submitButton" type="submit">Submit</button>
        </form>
    );
}

export { ContactFormControlled };