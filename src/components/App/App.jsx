import React from "react";
import { useFetchContactsQuery } from "redux/contactSlice";
import ContactForm from "../ContactForm";
import ContactList from "../ContactList";
import FilterByName from "../FilterByName";
import {Container, TitleMain, TitleSecondary} from './App.styled';

const App = () => {
  const data = useFetchContactsQuery()
    // .then(response => response.json()).then(data => console.log(data));
  console.log("data", data);


  // fetch('https://6301f05be71700618a4029e4.mockapi.io/api/v1/contacts').then(response => response.json()).then(data => console.log(data));


  // fetch('https://6301f05be71700618a4029e4.mockapi.io/api/v1/contacts')
	// .then(response => response.json())
	// .then(data => console.log(data))
	// .catch(err => console.error(err));
  
  
  return (
    <Container>
       <TitleMain>Phonebook</TitleMain>
      
      {/* <ContactForm></ContactForm> */}
      
      <TitleSecondary>Contacts</TitleSecondary>

      <FilterByName></FilterByName>

      {/* <ContactList></ContactList> */}
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