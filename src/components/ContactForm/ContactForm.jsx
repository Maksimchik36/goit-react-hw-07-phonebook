import React, { useState } from "react";
import { nanoid } from 'nanoid';
import { addContact } from "redux/contacts";
import { useDispatch, useSelector } from "react-redux";
import { Form, Label, Input, Button} from './ContactForm.styled'

const ContactForm = () => {
   
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  // получает ссылку на функцию для отправки действий
  const dispatch = useDispatch();

  // читает данные из state.contacts(store) и подписывается на их обновление  
  const contacts = useSelector(state => state.contacts.value);


  // изменяет значение имени name на введённое в инпуте
  const handleChangeName = (event) => {
    const { value } = event.target;
    setName(value);
  };


  // изменяет значение номера телефона number на введённое в инпуте
  const handleChangeNumber = (event) => {
    const { value } = event.target;
    setNumber(value);
  };


  // добавляет введённые данные в contacts(store)
  const handleSubmit = event => {
    event.preventDefault();
    const {name, number} = event.currentTarget;
    const id = nanoid();
    const newContact = { id: id, name: name.value, number: number.value };

    // есть ли добавляемый контакт в списке уже существующих контактов ?
    const contactIsInList = contacts.some(contact =>contact.name === newContact.name);
    // сообщение об ошибке
    const errorAdd = () => alert(`${newContact.name} is already in contacts list.`);
    // если нового контакта нет в списке, добавляет его. в противном случае - выдает сообщение об ошибке
    contactIsInList !== true ? dispatch(addContact(newContact)) : errorAdd();
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