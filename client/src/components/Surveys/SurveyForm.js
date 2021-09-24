import _ from 'lodash';
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from "./SurveyField";

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
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
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

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);