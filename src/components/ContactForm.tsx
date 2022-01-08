import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit() {
    console.log('submit');
  }

  return (
    <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
      <form
        id="contact-form"
        onSubmit={() => {
          handleSubmit();
        }}
        method="POST"
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            style={{ border: 'solid 1px' }}
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            style={{ border: 'solid 1px' }}
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <input
            style={{ border: 'solid 1px' }}
            type="text"
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button style={{ border: 'solid 1px' }} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
