import React, {Component} from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import FilterByName from "./FilterByName";

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
  
  // получает отфильтрованные элементы
  getVisibleContacts = ()=>{
    const {filter, contacts} = this.state;
    // приводит значение filter к нижнему регистру
    const normalizedFilter = filter.toLowerCase();
    
    // фильтрует контакты в зависимости от введённых данных в форме поиска
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

  }
  
  render() {
    const visibleContacts = this.getVisibleContacts();

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
        submitForm={this.getDataFromContactForm}>
      </ContactForm>
      
      <h2>Contacts</h2>

      <FilterByName
      value={this.state.filter}
      onChange={this.handleFilter}
      >
      </FilterByName>

      <ContactList
        array={visibleContacts}>       
      </ContactList>
    </div>
  )
  }
};

export default App;
