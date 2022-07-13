import React, {Component} from "react";
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button} from './ContactForm.styled'

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
      };

    // Для всех инпутов создаем один обработчик
  // Различать инпуты будем по атрибуту name
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {name, number} = event.currentTarget;
    const id = nanoid();
    const newContact = {id:id, name: name.value, number: number.value};
    this.props.submitForm(newContact);
    this.reset();
  }
  
  // очищение инпутов формы
  reset = () => {
    this.setState({ name: '', number: ''})
  };

    render(){
        return(
          <Form onSubmit={this.handleSubmit}>
            <Label>Name
              <Input 
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={this.handleChange}
                value={this.state.name}
                required/>
            </Label>
            <Label>Number
              <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                onChange={this.handleChange}
                value={this.state.number}
                required
              />
            </Label>
            <Button type="submit">Add contact</Button>
      </Form>
    )
    }
}

export default ContactForm;