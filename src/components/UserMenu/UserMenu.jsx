import { useDispatch, useSelector } from 'react-redux';
import {selectUser} from "../../redux/auth/selectors.js";
import {logout} from "../../redux/auth/operations.js";

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div>
            <p>Welcome, {user.name}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default UserMenu;