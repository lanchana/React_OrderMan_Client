/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import PropTypes from 'prop-types';


/**
 * @const PageTitle
 * @description Reusable title to use for pages. Sits in AuthenticatedLayout
 */
const PageTitle = props => (
  <h1>{props.title}</h1>
);


PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};


PageTitle.defaultProps = {};


export default PageTitle;
