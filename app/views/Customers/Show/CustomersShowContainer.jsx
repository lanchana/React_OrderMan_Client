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


// PropTypes imports


/**
 * @class CustomersShowContainer
 * @description Container for Customer Display and Updates
 */
class CustomersShowContainer extends Component {
  constructor(props) {
    super(props);


    /**
     * @function retrieveCustomer
     * @description Retrieves a specific customer by ID
     * @param id
     */
    this.retrieveCustomer = (id) => {
      alert(id);
    };


    /**
     * @function handleSubmit
     * @description Submit handler for Customer updates
     * @param e
     */
    this.handleSubmit = (e) => {
      e.preventDefault();
    };
  }


  componentWillMount() {}


  render() {
    return (
      <AuthenticatedLayout
        showBackButton
        pageTitle="CustomerShow: NAME_HERE"
      >
        <h3>Children of CustomersShow</h3>
      </AuthenticatedLayout>
    );
  }
}


CustomersShowContainer.propTypes = {};


CustomersShowContainer.defaultProps = {};


// const mapStateToProps = state => ({});
const mapStateToProps = () => ({});


const mapDispatchToProps = () => ({});


export default connect(mapStateToProps, mapDispatchToProps())(CustomersShowContainer);
