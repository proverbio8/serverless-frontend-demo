import { Button, ButtonProps, CircularProgress } from '@mui/material';
import React from 'react';

interface LoadingButtonProps extends ButtonProps {
  loading: boolean;
}
const LoadingButton: React.FC<LoadingButtonProps> = ({
  loading,
  children,
  // spread the rest of the props to apply them on the Button
  ...props
}) => {
  return (
    <Button
      {...props}
      disabled={loading}
      sx={{
        width: {
          xs: '100%', // 100% width for small (xs) screens
          md: '300px', // 200px width for medium (md) and larger screens
        },
      }}
    >
      {loading ? <CircularProgress size={24} /> : children}
    </Button>
  );
};

export default LoadingButton;
