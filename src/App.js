import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';



class App extends Component {

  render() {
    return (
      <Formik
      initialValues={{ holderName: '', cardNumber: '', expirationMonth: '', expirationYear: '', cvc: '' }}
      validate={values => {
        let errors = {};
        if (!values.holderName) {
          errors.holderName = 'Required';
        } 
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="holderName" placeHolder="Holder Name" />
          <ErrorMessage name="holderName" component="div" />
          <Field name="cardNumber" placeHolder="Card Number" />
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
          <Field name="cvc" placeHolder="CVC" />
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
