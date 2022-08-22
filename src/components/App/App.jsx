import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "components/Header";
import Loader from "components/Loader";
// import { useFetchContactsQuery } from "redux/contactSlice";
// import ContactForm from "../ContactForm";
// import ContactList from "../ContactList";
// import FilterByName from "../FilterByName";
// import {Container, TitleMain, TitleSecondary} from './App.styled';
import { Container } from './App.styled';

const ContactForm = lazy(() => import('../../pages/ContactForm'));
const ContactList = lazy(() => import('../../pages/ContactList'));
const ContactsPage = lazy(() => import('../../pages/ContactList'));

const FilterByName = lazy(() => import('../../pages/FilterByName'));


const App = () => {
  // const {data, isFetching} = useFetchContactsQuery()
  //   // .then(response => response.json()).then(data => console.log(data));
  // console.log("data", data);


  // fetch('https://6301f05be71700618a4029e4.mockapi.io/api/v1/contacts').then(response => response.json()).then(data => console.log(data));


  // fetch('https://6301f05be71700618a4029e4.mockapi.io/api/v1/contacts')
	// .then(response => response.json())
	// .then(data => console.log(data))
	// .catch(err => console.error(err));
  
  
  return (
    <Container>
      <Header></Header>

      <Suspense fallback={<Loader />}>
      <Routes>        
          <Route path="/" element={<ContactForm />} />
          <Route path ="/phonebook" element={<ContactsPage />} />
          <Route path="/phonebook/:filter" element={<FilterByName />} />
          <Route path ="*" element={<ContactForm />} />
      </Routes>
    </Suspense>

      {/* <TitleMain>Phonebook</TitleMain>
      
      <ContactForm></ContactForm>
      
      <TitleSecondary>Contacts</TitleSecondary>

      <FilterByName></FilterByName>

      {isFetching && <Loader />}

      {data && !isFetching && <ContactList contacts={data}></ContactList>} */}
    </Container>
  )
};

export default App;












// import React from "react";
// import ContactForm from "../ContactForm";
// import ContactList from "../ContactList";
// import FilterByName from "../FilterByName";
// import {Container, TitleMain, TitleSecondary} from './App.styled';

// const App = () => {
  
//   return (
//     <Container>
//        <TitleMain>Phonebook</TitleMain>
      
//       <ContactForm></ContactForm>
      
//       <TitleSecondary>Contacts</TitleSecondary>

//       <FilterByName></FilterByName>

//       <ContactList></ContactList>
//     </Container>
//   )
// };

// export default App;