import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {register} from "../../redux/auth/operations.js";

const RegistrationForm = () => {
    const dispatch = useDispatch();

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    const handleSubmit = (values, { resetForm }) => {
        dispatch(register(values));
        resetForm();
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form>
                <label>
                    Name:
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" component="div" />
                </label>
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
                <button type="submit">Register</button>
            </Form>
        </Formik>
    );
};

export default RegistrationForm;