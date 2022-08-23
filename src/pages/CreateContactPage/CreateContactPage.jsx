import ContactForm from "components/ContactForm";
// import { useHistory } from 'react-router-dom';
import { CreateContactsPageSt } from "./CreateContactPage.styled";
import { useCreateContactMutation } from "redux/contactSlice";
import Loader from "components/Loader";
    
    
const CreateContactPage = () => {
    // для отправки пользователя на другую page 
    // const history = useHistory();
    // ф-я возвращает ф-ю и статусы выполнения
    const [createContact, {isLoading}] = useCreateContactMutation();

    const handleSubmit = event => {
        event.preventDefault();
        // значение input поля name
        const name = event.target.elements.name.value;
        // значение input поля phone
        const phone = event.target.elements.phone.value;
        // сброс значений инпутов формы
        event.currentTarget.reset();
        // вызов ф-и, к-рая создаёт новый контакт с данными, полученными из input-ов, и отправляет его на бэк-энд mockAPI
        try {
            createContact({ name, phone, });
            // history.push('contacts');
            console.log("SUCCESS");
         }
        catch {
            console.log("ERROR");
        }
    }

    return <CreateContactsPageSt>
        {isLoading && <Loader />}
        <ContactForm onSubmit={handleSubmit}></ContactForm>
    </CreateContactsPageSt>

}

export default CreateContactPage;