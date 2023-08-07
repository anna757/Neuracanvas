import { Snackbar, Alert } from '@mui/material';

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
