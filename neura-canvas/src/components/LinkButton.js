import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import '../styles/LinkButton.css';

/**
 * LinkButton component.
 * Renders a button that acts as a link.
 * @param {Object} props - The properties of the LinkButton component.
 * @param {string} props.to - The target URL of the link.
 * @param {string} props.text - The text to display within the link button.
 * @returns {JSX.Element} The LinkButton component.
 */
const LinkButton = React.memo(({ to, text }) => {
    return (
        <NavLink to={to} className={'linkButton'}>
            <Typography variant="h6">
                {text}
            </Typography>
        </NavLink>
    );
});

export default LinkButton;
