import React from 'react';
import { Link } from 'react-router-dom';

/**
 * LinkButton component.
 * Renders a button that acts as a link.
 * @param {string} to - The target URL of the link.
 * @param {string} text - The text to display within the link button.
 */
const LinkButton = ({ to, text }) => {
  return (
    <Link to={to} style={{ color: 'inherit', textDecoration: 'inherit' }}>
      {text}
    </Link>
  );
};

export default LinkButton;
