import ContactList from "components/ContactList";
import { TitleContactsSt, ContactsPageSt } from './ContactsPage.styled';
import { useFetchContactsQuery, useDeleteContactMutation } from "redux/contactSlice";
import Loader from "components/Loader";
import FilterByName from "components/FilterByName";

const ContactsPage = () => {
    // ф-я возвращает данные и статусы выполнения
    const { data, isFetching, isSuccess } = useFetchContactsQuery();
    // ф-я возвращает ф-ю и статусы выполнения
    const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

    
   return <ContactsPageSt>
       {isSuccess && <TitleContactsSt>Contacts</TitleContactsSt>}

       {isFetching && <Loader />}
       
       {isSuccess && <FilterByName></FilterByName>}
       
       {data && <ContactList contacts={data} onDelete={deleteContact} deleting={isDeleting} />}
   </ContactsPageSt>
}

export default ContactsPage;