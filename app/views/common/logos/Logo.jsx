/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React from 'react';
import logoImage from '../../../assets/logo.png';


/**
 * @class Logo
 * @description Renders a Bootstrap responsive image
 */
const Logo = () => (
  <img
    src={logoImage}
    alt="TalkRise OrderMan"
    className="img"
    width="150"
  />
);


export default Logo;
