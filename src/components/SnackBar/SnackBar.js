import React, { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export default function SnackBar({ isError }) {
  const [isOpen, setIsOpen] = React.useState(isError);

  useEffect(() => {
    if (isOpen) return;
    setIsOpen(isError);
  }, [isError]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={isOpen} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='error'>
          This is an error message!
        </Alert>
      </Snackbar>
    </Stack>
  );
}
