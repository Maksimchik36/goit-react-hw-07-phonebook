import PropTypes from 'prop-types';
import {List, Item, Button} from './ContactList.styled'


const ContactList = ({array, onClick}) =>{
    return(<List>        
        {array.map(contact=>{return <Item key={contact.id}>{contact.name}: {contact.number}
                                      <Button onClick={onClick} id={contact.id}>Delete</Button>
                                    </Item>})}
      </List>)
}


ContactList.propTypes = {
  array:PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ContactList;