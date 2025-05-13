

// LoginPage.jsx
import React from 'react';
import { Box, Grid, Paper, TextField, Button, Typography, useMediaQuery, Link, Card, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import bannerImage from '../assets/banner.jpg';
import logo from '../assets/logo.png';

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
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={logo}
                  alt="logo Image"
                  width="150"
                />
                {/* <CardMedia
                  component="img"
                  width="50"
                  image={logo}
                  alt="logo Image"
                /> */}
              </Box>
              
              <Typography variant="h5" align="center" gutterBottom>
                Sign In
              </Typography>
              <TextField fullWidth label="Email" margin="normal" />
              <TextField fullWidth label="Password" type="password" margin="normal" />
              <Button fullWidth variant="contained" sx={{ mt: 2 }}>
                Login
              </Button>
              <Box display="flex" gap={2} mt={2}>
                <Link href="/link1">Forgot password?</Link>
                <Link href="/link2">Create a New Account</Link>
              </Box>
            </Box>
          </Box>
      </Grid>
    </Grid>
  </Box>

  );
};

export default LoginPage;
