import React, { useState } from "react";
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button} from './ContactForm.styled'

const ContactForm = ({ submitForm }) => {
   
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  // изменяет значение name на введённое в инпуте
  const handleChangeName = (event) => {
    const { value } = event.target;
    setName(value);
  };


  // изменяет значение number на введённое в инпуте
  const handleChangeNumber = (event) => {
    const { value } = event.target;
    setNumber(value);
  };


  // отправляет введённые данные в App
  const handleSubmit = event => {
    event.preventDefault();
    const {name, number} = event.currentTarget;
    const id = nanoid();
    const newContact = { id: id, name: name.value, number: number.value };
    submitForm(newContact);
    reset();
  }
  
  
  // очищение инпутов формы
  const reset = () => {
    setName('');
    setNumber('');
  };
  
  
        return(
          <Form onSubmit={handleSubmit}>
            <Label>Name
              <Input 
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={handleChangeName}
                value={name}
                required/>
            </Label>
            <Label>Number
              <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                onChange={handleChangeNumber}
                value={number}
                required
              />
            </Label>
            <Button type="submit">Add contact</Button>
      </Form>
    )
    
}

export default ContactForm;