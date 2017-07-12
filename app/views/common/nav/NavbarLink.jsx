/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


/**
 * @const NavbarLink
 * @description A link that sits in the Navbar to route to different pages
 */
const NavbarLink = props => (
  <li className={props.pathname === props.path ? 'active' : ''}>
    <Link to={props.path}>{props.title}</Link>
  </li>
);


NavbarLink.propTypes = {
  pathname: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};


NavbarLink.defaultProps = {};


export default NavbarLink;
