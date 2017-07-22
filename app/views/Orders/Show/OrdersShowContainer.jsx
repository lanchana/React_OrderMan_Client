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
import propTypes from 'prop-types';
import { connect } from ' react-redux ';

class OrdersShowContainer extends Component {
  render() {
    return(
      <div />;
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchProps = () => ({

});

export default connect(mapStateToProps, mapDispatchProps())(OrdersShowContainer);