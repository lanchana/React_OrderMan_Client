/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description This connected OrdersCreateContainer is responsible for creating an order.
 *
 * @description It uses an AuthenticatedLayout and an OrderDetailsForm.
 *
 * propTypes = {
 *   performOrdersCreateAction: PropTypes.func.isRequired,
 *   ordersCreateform: ...,
 * };
 *
 * @exports OrdersCreateContainer
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import OrderDetailsForm from '../Show/components/OrderDetailsForm';

import AuthenticatedLayout from '../../common/layouts/AuthenticatedLayout';

import { performOrdersCreate } from './actions/ordersCreateActions';

class OrdersCreateContainer extends Component {
    constructor(props) {
        super(props);

        this.createOrder = (event) => {
            event.preventDefault();
            const { customer_id } = this.props.match.params;

            const { values } = this.props.orderCreateForm;

            values.customer_id = customer_id;

            this.props.performOrdersCreate(values);
        };
    }

    render() {
        return (
                <AuthenticatedLayout showBackButton pageTitle="Create New Order">
                    <OrderDetailsForm handleSubmit={this.createOrder} />
                </AuthenticatedLayout>
        );
    }
}

const mapStateToProps = state => ({
    orderCreateForm: state.form.OrderDetailsForm,
    ordersCreate: state.ordersCreate,
});

const mapDispatchToProps = () => ({
    performOrdersCreate,
});

export default connect(mapStateToProps, mapDispatchToProps())(OrdersCreateContainer);
