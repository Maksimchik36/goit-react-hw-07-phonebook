import React, {Component} from "react";
import ContactForm from "../ContactForm";
import ContactList from "../ContactList";
import FilterByName from "../FilterByName";
import {Container, TitleMain, TitleSecondary} from './App.styled';

class App extends Component  {
  state = {
    contacts: [],
    filter: '',
  };
    
  // получает из localStorage данные о содержимом массива и записывает их в state.contacts
  componentDidMount() {
    const data = localStorage.getItem('contacts')
    const parsedData = JSON.parse(data);
    // обязательная проверка - существуют ли данные (не равно ли null)
    if (parsedData) {
          this.setState({contacts: parsedData});
        }

    
  }

  // если данные обновляются, то при каждом рендере перезаписывает их в state.contacts
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    // проверка -  есть ли изменения, и только при положительном ответе производятся какие-либо действия
    if (prevState.contacts.length !== !contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    }
  }

  // записывает вводимые данные в state.filter
  handleFilter = (event) => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };
  
  // получает данные из формы и обновляет state.contacts, если такого контакта ещё нет в списке
  getDataFromContactForm = (data) =>{
    // проверяет есть ли добавляемый контакт в списке
    const contactIsInList = this.state.contacts.some(contact =>contact.name === data.name);
    // вносит новые данные в state
    const changeState = () => this.setState((prevState)=>{return {contacts:[...prevState.contacts, data]}});
    const errorAdd  = () => alert(`${data.name} is already in contacts list.`);
    contactIsInList !== true ? changeState() : errorAdd();
  }
  
  // получает отфильтрованные контакты
  getVisibleContacts = ()=>{
    const {filter, contacts} = this.state;
    // приводит значение filter к нижнему регистру
    const normalizedFilter = filter.toLowerCase();
    
    // фильтрует контакты в зависимости от введённых данных в форме поиска
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  // удаляет контакт из списка, сравнивая id контакта и id
  deleteContactFromList = (event) =>{
    const {contacts} = this.state;
    this.setState({contacts: contacts.filter(contact => contact.id !== event.target.id)})
  }


  render() {
    const visibleContacts = this.getVisibleContacts();

  return (
    <Container>
       <TitleMain>Phonebook</TitleMain>
      
      <ContactForm
        submitForm = {this.getDataFromContactForm}>
      </ContactForm>
      
      <TitleSecondary>Contacts</TitleSecondary>

      <FilterByName
        value={this.state.filter}
        onChange={this.handleFilter}>
      </FilterByName>

      <ContactList
        array={visibleContacts}
        onClick={this.deleteContactFromList}
        >       
      </ContactList>
    </Container>
  )
  }
};

export default App;
