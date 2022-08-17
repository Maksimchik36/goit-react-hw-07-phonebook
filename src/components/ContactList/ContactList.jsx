// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {List, Item, Button} from './ContactList.styled'


const ContactList = ({onClick}) =>{
  // читает данные из state.contacts(store) и подписывается на их обновление
  const contacts = useSelector(state => state.contacts.value);

  // читает данные из state.filter(store) и подписывается на их обновление  
  const filter = useSelector(state => state.filter.value);

    return(<List>        
        {contacts.map(contact=>{return <Item key={contact.id}>{contact.name}: {contact.number}
                                      <Button onClick={onClick} id={contact.id}>Delete</Button>
                                    </Item>})}
      </List>)
}


// ContactList.propTypes = {
//   array:PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   })).isRequired,
//   onClick: PropTypes.func.isRequired,
// }

export default ContactList;