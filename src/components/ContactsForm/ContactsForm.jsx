import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations.js';
import css from './ContactsForm.module.css';

export default function ContactsForm() {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        dispatch(addContact({ name, number }));
        form.reset();
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input
                className={css.input}
                name="name"
                placeholder="Name"
                required
            />
            <input
                className={css.input}
                name="number"
                placeholder="Number"
                required
            />
            <button className={css.button} type="submit">
                Add Contact
            </button>
        </form>
    );
}