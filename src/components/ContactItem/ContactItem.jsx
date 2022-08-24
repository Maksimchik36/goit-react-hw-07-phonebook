import { useDeleteContactMutation } from "redux/contactSlice";
import { Item, Button } from './ContactItem.styled';

// из распыленного contact в ContactsList деструктуризируем след-щие параметры:
const ContactItem = ({id, name, phone}) => {
    // ф-я возвращает ф-ю и статусы выполнения
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  
  return (
      <Item>{name}: {phone}
      <Button onClick={() => deleteContact(id)} >{isDeleting ? 'Deleting...' : 'Delete'}</Button>
      </Item>
  )
}


export default ContactItem;