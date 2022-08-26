import { useSelector } from "react-redux";
import ContactList from "components/ContactList";
import { TitleContactsSt, ContactsPageSt } from './ContactsPage.styled';
import { useFetchContactsQuery } from "redux/contactSlice";
import Loader from "components/Loader";
import FilterByName from "components/FilterByName";

const ContactsPage = () => {
    // ф-я возвращает данные и статусы выполнения
    const { data = [], isFetching, isSuccess } = useFetchContactsQuery();

    // читает данные из state.filter(store) и подписывается на их обновление
    const inputData = useSelector(state => state.filter.value)
   
    // выдает отфильтрованные контакты
    const filteredContacts = data.filter(obj => obj.name.toLowerCase().includes(inputData));

    
   return <ContactsPageSt>
       {isSuccess && <TitleContactsSt>Contacts</TitleContactsSt>}

       {isFetching && <Loader />}
       
       {isSuccess && <FilterByName></FilterByName>}
       
       {data && <ContactList contacts={filteredContacts} />}
   </ContactsPageSt>
}

export default ContactsPage;