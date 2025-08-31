import ContactsForm from "../../components/ContactsForm/ContactsForm.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import ContactList from "../../components/ContactList/ContactList.jsx";

const ContactsPage = () => {
    return (
        <div>
            <h1>Phonebook</h1>
            <ContactsForm/>
            <h2>Contacts</h2>
            <SearchBox/>
            <ContactList/>
        </div>
    );
};

export default ContactsPage;