import React, {Component} from "react";

import ContactForm from "./ContactForm";



class App extends Component  {
  state = {
    contacts: [],
    filter: '',
  };
    
  // записывает вводимые данные в state.filter
  handleFilter = (event) => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };
  
  // получает данные из формы и обновляет state.contacts
  getDataFromContactForm = (data) =>{
    this.setState((prevState)=>{return {contacts:[...prevState.contacts, data]}})
  }
  
  render() {

    // приводит значение filter к нижнему регистру
    // const normalizedFilter = this.state.filter.toLowerCase();
    
    // фильтрует контакты в зависимости от введённых данных в форме поиска
    // const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

  return (
    <div
      style={{
        height: '100vh',
        margin:0,
        padding: 20,
        // display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* React homework template */}
      <h1>Phonebook</h1>
      <ContactForm
      submitForm={this.getDataFromContactForm}></ContactForm>
      

      <label>Find contact by Name
        <input type="text" value={this.state.filter} onChange={this.handleFilter} />
      </label>

      <ul>
        {/* {this.state.filter === ""} ?
        {this.state.contacts.map(contact => { return <li key={contact.id}>{contact.name}: {contact.number}</li> })}
        : */}
        {/* {visibleContacts.map(contact => { return <li key={contact.id}>{contact.name}: {contact.number}</li> })} */}
        {this.state.contacts.map(contact=>{return <li key={contact.id}>{contact.name}: {contact.number}</li>})}
      </ul>


    </div>
  )
  }
};

export default App;
