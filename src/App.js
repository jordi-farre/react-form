import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GhostInputComponent from './ghostInputComponent';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
  holderName: Yup.string()
    .required('Holder name is required')
    .matches(/^[^0-9]*$/, 'Holder name has not valid format')
});

class App extends Component {

  render() {
    return (
      <Formik
      initialValues={{ holderName: '', cardNumber: '', expirationMonth: '', expirationYear: '', cvc: '', hello: '' }}
      validationSchema={ValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <GhostInputComponent name="holderName" placeholder="Holder Name" />
          <ErrorMessage name="holderName" component="div" />
          <Field name="cardNumber" placeholder="Card Number" />
          <ErrorMessage name="cardNumber" component="div" />
          <Field component="select" name="expirationMonth">
            <option value="">Month</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </Field>
          <Field component="select" name="expirationMonth">
            <option value="">Year</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
          </Field>
          <Field name="cvc" placeholder="CVC" />
          <ErrorMessage name="cvc" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
    );
  }
}

export default App;
