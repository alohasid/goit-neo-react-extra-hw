import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOps.js';

export default function ContactsForm() {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.elements.name.value;
        const phone = form.elements.number.value; // Change "number" to "phone"
        dispatch(addContact({ name, phone })); // Match backend field names
        form.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" required />
            <input name="number" placeholder="Number" required />
            <button type="submit">Add Contact</button>
        </form>
    );
}