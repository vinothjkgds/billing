

// LoginPage.jsx
import React from 'react';
import { Box, Grid, Paper, TextField, Button, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import bannerImage from '../assets/banner.jpg';

const LoginPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0}>
      {!isSmallScreen && ( <Grid size={8}>
        <Box sx={{ height: '100vh', backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }}> </Box>
      </Grid>
      )}
      <Grid size={isSmallScreen ? 12 : 4}>
          <Box  container sx={{ height: '100vh', alignItems: 'center',
          justifyContent: 'center', display: 'flex', p: "4", }}>
            <Box sx={{ maxWidth: 400, width: '100%'  }}>
              <Typography variant="h5" align="center" gutterBottom>
                Sign In
              </Typography>
              <TextField fullWidth label="Email" margin="normal" />
              <TextField fullWidth label="Password" type="password" margin="normal" />
              <Button fullWidth variant="contained" sx={{ mt: 2 }}>
                Login
              </Button>
            </Box>
          </Box>
      </Grid>
    </Grid>
  </Box>

  );
};

export default LoginPage;
