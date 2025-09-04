import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors.js';
import { deleteContact } from '../../redux/contacts/operations.js';
import css from './ContactList.module.css';

const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();

    const handleDelete = id => {
        dispatch(deleteContact(id));
    };

    return (
        <ul className={css.list}>
            {contacts.map(contact => (
                <li className={css.item} key={contact.id}>
                    <span className={css.text}>
                        {contact.name}: {contact.number}
                    </span>
                    <button
                        className={css.button}
                        onClick={() => handleDelete(contact.id)}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;