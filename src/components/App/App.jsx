import React, { useState, useEffect } from "react";
import ContactForm from "../ContactForm";
import ContactList from "../ContactList";
import FilterByName from "../FilterByName";
import {Container, TitleMain, TitleSecondary} from './App.styled';

const App = () => {
  
  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  const [filtered, setFiltered] = useState('');

     
    // если contacts изменяется, то при каждом рендере перезаписывает их в localStorage
  useEffect(() => {
      window.localStorage.setItem('contacts', JSON.stringify(contacts))    
  }, [contacts])


  // // записывает вводимые данные в filtered
  // const handleFilter = (event) => {
  //   // const { value } = event.currentTarget;
  //   // setFiltered(value);
  // };
  
  // получает данные из формы и обновляет contacts, если такого контакта ещё нет в списке
  const getDataFromContactForm = (data) => {
    // проверяет есть ли добавляемый контакт в списке
    const contactIsInList = contacts.some(contact =>contact.name === data.name);
    // вносит новые данные в state
    const errorAdd  = () => alert(`${data.name} is already in contacts list.`);
    contactIsInList !== true ? setContacts(prev=>[...prev, data]) : errorAdd();
  }
  
  // получает отфильтрованные контакты
  const getVisibleContacts = ()=>{
    // приводит значение filter к нижнему регистру
    const normalizedFilter = filtered.toLowerCase();
    
    // фильтрует контакты в зависимости от введённых данных в форме поиска
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  // удаляет контакт из списка, сравнивая id контакта и id нажатой кнопки
  const deleteContactFromList = (event) =>{
    const undeletedContacts = contacts.filter(contact => contact.id !== event.target.id);
    setContacts(undeletedContacts);
  }

  // результат вызова функции записывается в переменную (для облегчения последующего использования в коде)
  const visibleContacts = getVisibleContacts();

  return (
    <Container>
       <TitleMain>Phonebook</TitleMain>
      
      <ContactForm
        submitForm = {getDataFromContactForm}>
      </ContactForm>
      
      <TitleSecondary>Contacts</TitleSecondary>

      <FilterByName></FilterByName>

      <ContactList
        array={visibleContacts}
        onClick={deleteContactFromList}
        >       
      </ContactList>
    </Container>
  )
};

export default App;