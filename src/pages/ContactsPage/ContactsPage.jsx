import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle';
import ContactList from "../../components/ContactList/ContactList.jsx";
import ContactsForm from "../../components/ContactsForm/ContactsForm.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import {selectLoading} from "../../redux/contacts/selectors.js";
import {fetchContacts} from "../../redux/contacts/operations.js";

export default function ContactsPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <DocumentTitle>Your contacts</DocumentTitle>
            <h1>Phonebook</h1>
            <ContactsForm/>
            <h2>Contacts</h2>
            <SearchBox/>
            <ContactList/>
        </>
    );
}
