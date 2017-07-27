/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description OrdersShowContainer shows and edits Order information.
 *
 * @description This container uses an AuthenticatedLayout and OrderDetailsForm.
 *
 * propTypes = {
 *   ordersShow: ...,
 *   match: ...,
 *   performRetrieveOrder: PropTypes.func.isRequired,
 *   performUpdateOrder: PropTypes.func.isRequired,
 *   orderDetailsForm: ...,
 * };
 *
 * @exports OrdersShowContainer
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AuthenticatedLayout from '../../common/layouts/AuthenticatedLayout';
import OrderDetailForm from './components/OrderDetailsForm';

import {
  performRetrieveOrder,
  performUpdateOrder,
} from './actions/ordersShowActions';

import {
  OrdersShowPropType,
  MatchPropType,
  ReduxFormPropType,
} from '../../../customPropTypes';

class OrdersShowContainer extends Component {
  constructor(props) {
    super(props);

    this.retriveOrder = (id) => {
      this.props.performRetrieveOrder(id);
    };

    this.handleSubmit = (err) => {
      err.preventDefault();
      const { values } = this.props.orderDetailsForm;
      this.props.performUpdateOrder(this.props.match.params.id, values);
    };
  }

  componentWillMount() {
    this.retriveOrder(this.props.match.params.id);
  }

  render() {
    const {
      ordersShow: {
        isFetching,
        order,
      },
    } = this.props;

    return(
     <AuthenticatedLayout
       showBackButton
       pageTitle="Order Details"
     >
     </AuthenticatedLayout>
    );
  }
}

OrdersShowContainer.propTypes = {
  ordersShow: PropTypes.any.isRequired,
  match: MatchPropType.isRequired,
  performRetrieveOrder: PropTypes.func.isRequired,
  performUpdateOrder: PropTypes.func.isRequired,
  orderDetailsForm: ReduxFormPropType,
};

OrdersShowContainer.defaultProps = {
  orderDetailsForm: {},
};

const mapStateToProps = state => ({
  ordersShow: state.ordersShow,
  orderDetailsForm: state.form.orderDetailsForm,
});

const mapDispatchProps = () => ({
  performRetrieveOrder,
  performUpdateOrder,
});

export default connect(mapStateToProps, mapDispatchProps())(OrdersShowContainer);
