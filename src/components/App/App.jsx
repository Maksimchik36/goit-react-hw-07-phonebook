import React from "react";
import ContactForm from "../ContactForm";
import ContactList from "../ContactList";
import FilterByName from "../FilterByName";
import {Container, TitleMain, TitleSecondary} from './App.styled';

const App = () => {
  
  return (
    <Container>
       <TitleMain>Phonebook</TitleMain>
      
      <ContactForm></ContactForm>
      
      <TitleSecondary>Contacts</TitleSecondary>

      <FilterByName></FilterByName>

      <ContactList></ContactList>
    </Container>
  )
};

export default App;