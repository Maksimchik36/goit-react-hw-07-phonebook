import React, {Component} from "react";
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  name: '',
  number: ''
};

class App extends Component  {
  state = {...INITIAL_STATE  }
  
  // Для всех инпутов создаем один обработчик
  // Различать инпуты будем по атрибуту name
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const id = nanoid();
    const newContact = {id:id, name:form.elements.name.value, number:form.elements.number.value}
    this.state.contacts.push(newContact);
    form.elements.name.value = "";
    form.elements.number.value = "";

    this.reset();
  }
  
  reset = () => {
    this.setState({ ...INITIAL_STATE });
    // console.log(this.state.contacts);
  };
  
  // записывает вводимые данные в state.filter
  handleFilter = (event) => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };
  
  render() {

    // приводит значение filter к нижнему регистру
    const normalizedFilter = this.state.filter.toLowerCase();
    
    // фильтрует контакты в зависимости от введённых данных в форме поиска
    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

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
      <h2>Phonebook</h2>
      
      <form onSubmit={this.handleSubmit} style={{display:"flex", flexDirection:"column"}}>
        <label>Name
                  <input 
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    onChange={this.handleChange}
                    value={this.name}
                    required/>

        </label>
        <label>Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleChange}
            value={this.number}
            required
          />
        </label>
        <button type="submit" style={{padding: 10}}>Add contact</button>
      </form>

      <label>Find contact by Name
        <input type="text" value={this.state.filter} onChange={this.handleFilter} />
      </label>

      <ul>
        {/* {this.state.filter === ""} ?
        {this.state.contacts.map(contact => { return <li key={contact.id}>{contact.name}: {contact.number}</li> })}
        : */}
        {visibleContacts.map(contact => { return <li key={contact.id}>{contact.name}: {contact.number}</li> })}
      </ul>


    </div>
  )
  }
};

export default App;
