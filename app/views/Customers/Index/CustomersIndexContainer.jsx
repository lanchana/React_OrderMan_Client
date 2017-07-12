/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import { connect } from 'react-redux';


// Component imports
import AuthenticatedLayout from '../../common/layouts/AuthenticatedLayout';


// Actions imports


// Custom imports


// PropTypes imports


/**
 * @class CustomersIndexContainer
 * @description Container for Customer creation
 */
class CustomersIndexContainer extends Component {
  constructor(props) {
    super(props);


    /**
     * @function findCustomers
     * @description Retrieves Customers with potential searchTerm
     * @param page
     */
    this.findCustomers = (page = 1) => {
      alert(page);
    };


    /**
     * @function handleSearch
     * @description Search handler
     * @param searchTerm
     */
    this.handleSearch = (searchTerm) => {
      alert(searchTerm);
    };
  }

  componentWillMount() {}

  render() {
    return (
      <AuthenticatedLayout
        pageTitle="Customers Index"
      >
        <h3>Children of the CustomersIndex</h3>
      </AuthenticatedLayout>
    );
  }
}


CustomersIndexContainer.propTypes = {};


CustomersIndexContainer.defaultProps = {};


// const mapStateToProps = state => ({});
const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});


export default connect(mapStateToProps, mapDispatchToProps())(CustomersIndexContainer);
