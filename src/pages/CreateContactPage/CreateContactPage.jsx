import ContactForm from "components/ContactForm";
// import { Redirect } from 'react-router-dom';
import { CreateContactsPageSt } from "./CreateContactPage.styled";
import { useCreateContactMutation } from "redux/contactSlice";
import Loader from "components/Loader";
    
    
const CreateContactPage = () => {
    // для отправки пользователя на другую page 
    // const history = useHistory();
    // ф-я возвращает ф-ю и статусы выполнения
    const [createContact, {isLoading, isSuccess}] = useCreateContactMutation();

    const handleSubmit = event => {
        event.preventDefault();
        // значение input поля name
        const name = event.target.elements.name.value;
        // значение input поля phone
        const phone = event.target.elements.phone.value;
        // сброс значений инпутов формы
        event.currentTarget.reset();

        // 1-ый вариант: вызов ф-и, к-рая создаёт новый контакт с данными, полученными из input-ов, и отправляет его на бэк-энд mockAPI
        createContact({ name, phone, });
        
        // // 2-ой вариант: вызов ф-и, к-рая создаёт новый контакт с данными, полученными из input-ов, и отправляет его на бэк-энд mockAPI
        // try {
        //     await createContact({ name, phone, });
        // // при положительном результате активной становится ContactsPage
        //     // history.push('contacts');
        //     console.log("SUCCESS");
        //  }
        // catch {
        //     console.log("ERROR");
        // }
    }

    return <CreateContactsPageSt>
        {isLoading && <Loader />}
        {/* {isSuccess && <Redirect />}  // при положительном результате активной становится ContactsPage */}

        <ContactForm onSubmit={handleSubmit}></ContactForm>
    </CreateContactsPageSt>

}

export default CreateContactPage;