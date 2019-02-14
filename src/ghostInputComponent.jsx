import React, { Component } from 'react';
import { Field } from 'formik';
import { connect, getIn } from 'formik';

const GhostInputComponent = (props) => {
    props.formik.values['hello'] = false;
    const touched = props.formik.touched[props.name];
    const value = props.formik.values[props.name];
    if (touched) {
        if (value === 'hello') props.formik.values['hello'] = true;
    }
    return (
        <div>
            <Field type="text" {...props.field} {...props} />
        </div>
)};

export default connect(GhostInputComponent);