import React from 'react';
import { Grid, Box, TextField, Button, Paper, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

//import './Login.css'; // Import custom CSS (optional)

const Login = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container sx={{ minHeight: '100vh' }}>
      {/* Left Banner */}
      {!isSmallScreen && (
        <Grid item md={6} sx={{ backgroundColor: '#f5f5f5',
        width: '50%' }}>
          <Box
            sx={{
              height: '100vh',
              backgroundImage: 'url(https://mitmysore.in/wp-content/uploads/2022/09/placeholder.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#f5f5f5' 
              
            }}
          />kjlk
        </Grid>
      )}

      {/* Login Form */}
      <Grid item xs={12} md={isSmallScreen ? 12 : 6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ width: '100%', maxWidth: 400, p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <TextField label="Email" fullWidth margin="normal" />
          <TextField label="Password" type="password" fullWidth margin="normal" />
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Sign In
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
