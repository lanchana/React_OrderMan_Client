/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description This component is responsible for displaying a form about a given Order.
 *
 * @description The form can be initialize with or without initialValues.
 *
 * @description The form is used for editing, displaying, and creating Orders.
 *
 * @description Redux-form that runs validations. Uses renderTextInput for it's Field components.
 *
 * propTypes = {
 *   invalid: PropTypes.bool.isRequired,
 *   pristine: PropTypes.bool.isRequired,
 *   handleSubmit: PropTypes.func.isRequired,
 * };
 */

 import React, { Component } from 'react';
 import PropTypes from 'prop-types';
 import { reduxForm , Field } from 'redux-form';

 import renderTextField from '../../../common/forms/renderTextField';
 import SuccessButton from '../../../common/buttons/SuccessButton';

 class OrderDetailsForm extends Component {
    render() {
        const {
            invalid,
            pristine,
            handleSubmit,
        } = this.props;

        return (
            <div>
                <Field
                    name="date"
                    placeholder="date"
                    component={renderTextField}
                />
                <Field
                    name="status"
                    placeholder="status"
                    component={renderTextField}
                />
                <Field
                    name="description"
                    placeholder="description"
                    component={renderTextField}
                />
                <SuccessButton
                    block
                    title="Save"
                    disable={invalid || pristine}
                    loading={false}
                    onClick={handleSubmit}
                />

            </div>
        );
    }
 }

 OrderDetailsForm.propTyps = {
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
 };

 const validate = (values) => {
    const errors = {};

    if(!values.date) {
        errors.date = "Required";
    }

    if(!values.status) {
        errors.status = 'Required'
    }

    if(!values.description) {
        errors.description = 'Required'
    }

    return errors;
 };

 export default reduxForm({
    form: 'OrderDetailsForm',
    validate,
 })(OrderDetailsForm);
