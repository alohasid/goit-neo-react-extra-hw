import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout/Layout.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage.jsx";
import ContactsPage from "./pages/ContactsPage/ContactsPage.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRouete.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route
                    path="/register"
                    element={<RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />}
                />
                <Route
                    path="/login"
                    element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
                />
                <Route
                    path="/contacts"
                    element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
                />
            </Route>
        </Routes>
    );
};

export default App;