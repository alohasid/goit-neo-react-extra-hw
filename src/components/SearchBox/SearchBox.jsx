import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice.js';
import css from './SearchBox.module.css';

export default function SearchBox() {
    const dispatch = useDispatch();

    const handleChange = e => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <input
            className={css.input}
            type="text"
            placeholder="Search"
            onChange={handleChange}
        />
    );
}