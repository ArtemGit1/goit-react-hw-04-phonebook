import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const ContactForm = ({ addContact, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    const isDuplicate = contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase());

    if (isDuplicate) {
      alert('This contact already exists!');
    } else {
      addContact({ id: nanoid(), name, number });
      setName('');
      setNumber('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Number:
        <input type="tel" name="number" value={number} onChange={(e) => setNumber(e.target.value)} required />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
