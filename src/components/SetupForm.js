import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from './TextInput';

const SignupForm = () => {
    return (
        <>
            <h1>Subscribe</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: ''
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required')
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                }}
            >
                <Form className="form">
                    <TextInput 
                        label="First Name"
                        name="firstName"
                        type="text"
                        
                    />
                    <TextInput 
                        label="Last Name"
                        name="lastName"
                        type="text"
                        helperText="Boolon"
                    />
                    <TextInput 
                        label="Email"
                        name="email"
                        type="email"
                        helperText="boolon@yomom.com"
                    />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    )
};

export default SignupForm;