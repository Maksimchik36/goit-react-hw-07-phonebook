import { useFetchContactsQuery, useDeleteContactMutation } from "redux/contactSlice";
import ContactList from "components/ContactList";
import Loader from "components/Loader";


export const ContactsPage = () => {
    const { data, isFetching } = useFetchContactsQuery();
    const [deleteContact, {isLoading: isDeleting}] = useDeleteContactMutation();


    return <div>
        {isFetching && <Loader />}
        {data && <ContactList contacts={data} onDelete={deleteContact} deleting={isDeleting} />}</div>
}