/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description This connected OrdersIndexContainer is responsible for listing all Orders.
 *
 * @description It uses an AuthenticatedLayout and an OrdersTable.
 *
 * propTypes = {
 *   customersIndex: ...,
 *   performOrdersIndexSearch: PropTypes.func.isRequired,
 * };
 *
 * @exports OrdersIndexContainer
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import { performOrdersIndexSearch } from './actions/ordersIndexActions';
import AuthenticatedLayout from "../../common/layouts/AuthenticatedLayout";
import OrdersTable from "../../common/tables/OrdersTable";


class OrdersIndexContainer extends Component {
	constructor(props) {
		super(props);

		this.findOrders = (page = 1) => {
			this.props.performOrdersIndexSearch(page);
		}
	}

	componentWillMount() {
	  // console.log('Firing action');
		this.findOrders(1);
	}


	render () {
		const {
			ordersIndex: {
				isFetching,
				orders,
				pagination,
			},
		} = this.props;

		return (
		  <AuthenticatedLayout pageTitle="Orders">
        {(() => {
          if (isFetching) {
            return <h4>Loading Orders....</h4>;
          }
          return(
            <OrdersTable
              orders={orders}
              pagination={pagination}
              handlePageChange={this.findOrders}
            />
          );
        })()}
      </AuthenticatedLayout>
		);
	}
}



const mapStateToProps = state => ({
	ordersIndex: state.ordersIndex,
});

const mapDispatchToProps = () => ({
  performOrdersIndexSearch,
});

export default connect(mapStateToProps, mapDispatchToProps())(OrdersIndexContainer);
