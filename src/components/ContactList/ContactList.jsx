import { List } from './ContactList.styled';
import ContactItem from 'components/ContactItem';

const ContactList = ({ contacts }) => {
  
  return (
    <List>        
        {contacts.map(contact=> (<ContactItem key={contact.id} {...contact}></ContactItem>))}
    </List>
  )
}


export default ContactList;