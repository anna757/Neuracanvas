import { Snackbar, Alert } from '@mui/material';

/**
 * Render a Snackbar component.
 *
 * @param {boolean} open - Determines whether the Snackbar is open or not.
 * @param {function} handleClose - Callback function to handle closing the Snackbar.
 * @param {number} duration - The duration in milliseconds that the Snackbar should be displayed.
 * @param {string} severity - The severity level of the Snackbar (e.g., "error", "warning", "info", "success").
 * @param {string} message - The message to be displayed inside the Snackbar.
 * @return {ReactElement} The rendered Snackbar component.
 */
const SnackbarComponent = ({ open, handleClose, duration, severity, message }) => (
  <Snackbar
    open={open}
    autoHideDuration={duration}
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    onClose={handleClose}
  >
    <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
      {message}
    </Alert>
  </Snackbar>
);

export default SnackbarComponent;
