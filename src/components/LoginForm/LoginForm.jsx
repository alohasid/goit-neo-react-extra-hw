import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {login} from "../../redux/auth/operations.js";

const LoginForm = () => {
    const dispatch = useDispatch();

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const handleSubmit = (values, { resetForm }) => {
        dispatch(login(values));
        resetForm();
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form>
                <label>
                    Email:
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                </label>
                <label>
                    Password:
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                </label>
                <button type="submit">Login</button>
            </Form>
        </Formik>
    );
};

export default LoginForm;