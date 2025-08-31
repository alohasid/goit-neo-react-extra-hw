import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/contactsSlice.js';
import { deleteContact } from '../../redux/contacts/contactsOps.js';

const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();

    const handleDelete = id => {
        dispatch(deleteContact(id));
    };

    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id}>
                    {contact.name}: {contact.phone}
                    <button onClick={() => handleDelete(contact.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;