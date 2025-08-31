import { useSelector } from 'react-redux';
import {selectIsLoggedIn} from "../../redux/auth/selectors.js";
import Navigation from "../Navigation/Navigation.jsx";
import UserMenu from "../UserMenu/UserMenu.jsx";
import AuthNav from "../AuthNav/AuthNav.jsx";

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};

export default AppBar;