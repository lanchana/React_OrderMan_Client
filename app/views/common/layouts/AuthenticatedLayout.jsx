/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module Imports
import React from 'react';
import PropTypes from 'prop-types';


// Component Imports
import BackButton from '../buttons/BackButton';
import Navbar from '../nav/Navbar';
import PageTitle from '../titles/PageTitle';


/**
 * @class UnauthenticatedLayout
 * @description A reusable layout for your authenticated pages like Customers and Orders
 */
const AuthenticatedLayout = props => (
  <div>
    <Navbar />
    <div className="container-fluid">
      <div className="col-xs-12 col-md-10 col-md-offset-1">
        {(() => props.showBackButton && <BackButton />)()}
        <PageTitle title={props.pageTitle} />
      </div>
      <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1">
        {props.children}
      </div>
    </div>
  </div>
);


AuthenticatedLayout.propTypes = {
  children: PropTypes.element.isRequired,
  pageTitle: PropTypes.string.isRequired,
  showBackButton: PropTypes.bool,
};


AuthenticatedLayout.defaultProps = {
  showBackButton: false,
};


export default AuthenticatedLayout;
