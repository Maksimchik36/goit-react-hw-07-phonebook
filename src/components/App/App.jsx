import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "components/Header";
import Loader from "components/Loader";
import { Container } from './App.styled';

const CreateContactPage = lazy(() => import('../../pages/CreateContactPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));


const App = () => { 
  
  return (
    <Container>
      <Header></Header>

      <Suspense fallback={<Loader />}>
      <Routes>        
          <Route path="/" element={<CreateContactPage />} />
          <Route path ="/phonebook" element={<ContactsPage />} />
          <Route path ="*" element={<CreateContactPage />} />
      </Routes>
      </Suspense>
    </Container>
  )
};

export default App;