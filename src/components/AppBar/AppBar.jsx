import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './AppBar.module.css';
import {AuthNav} from "../AuthNav/AuthNav.jsx";
import {Navigation} from "../Navigation/Navigation.jsx";
import {UserMenu} from "../UserMenu/UserMenu.jsx";

export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header className={css.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};
