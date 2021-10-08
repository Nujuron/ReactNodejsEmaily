import _ from 'lodash';
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from "./SurveyField";
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
    {label:'Survey Title', name: 'title' },
    {label:'Survey Subject', name: 'subject'},
    {label:'Email body', name: 'body'},
    {label:'Recipient List', name: 'emails'},
];

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({label, name}) => {
            return <Field  component={SurveyField} type="text" label={label} name={name} key={name} />
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    errors.emails = validateEmails(values.emails || '');

    _.each(FIELDS, ({name}) => {
        if(!values[name]) {
            errors[name] = 'You must fill in this field';
        }
    })
    
    

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);