import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm.js';
import ContactList from './ContactList/ContactList.js';
import Filter from './Filter/Filter.js';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    // Завантаження контактів з локального сховища під час монтажу компонента
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Збереження контактів у локальному сховищі під час оновлення стану
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleAddContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  handleDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    let filteredContacts = contacts;

    if (filter) {
      filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }

    return (
      <div>
        <h1>Телефонна книга</h1>
        <ContactForm onAddContact={this.handleAddContact} />

        <h2>Контакти</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} onDeleteContact={this.handleDeleteContact} />
      </div>
    );
  }
}

export default App;
