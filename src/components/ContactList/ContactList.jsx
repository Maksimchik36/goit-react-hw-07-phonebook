import { useSelector, useDispatch } from 'react-redux';
import { delContact } from 'redux/contacts';
import {List, Item, Button} from './ContactList.styled'


const ContactList = () =>{
  // читает данные из state.contacts(store) и подписывается на их обновление
  const contacts = useSelector(state => state.contacts.value);

  // читает данные из state.filter(store) и подписывается на их обновление  
  const filter = useSelector(state => state.filter.value);
  
  // получает ссылку на функцию для отправки действий
  const dispatch = useDispatch();


  // получает отфильтрованные контакты
  const getVisibleContacts = () => {
    // приводит значение filter к нижнему регистру
    const normalizedFilter = filter.toLowerCase();    
    // фильтрует контакты в зависимости от введённых данных в форме поиска
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }


  // результат вызова функции записывается в переменную (для облегчения последующего использования в коде)
  const visibleContacts = getVisibleContacts();


    return(<List>        
        {visibleContacts.map(contact=>{return <Item key={contact.id}>{contact.name}: {contact.number}
                                      <Button onClick={()=>dispatch(delContact(contact.id))}>Delete</Button>
                                    </Item>})}
      </List>)
}


export default ContactList;