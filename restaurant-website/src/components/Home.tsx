import React from 'react';
import { Typography, Box, Grid, Paper, Button } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Box>
      <Paper
        sx={{
          position: 'relative',
          backgroundImage: `url(images/restaurant.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1,
          },
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          align="center"
          sx={{
            position: 'relative',
            zIndex: 2,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            fontWeight: 'bold',
            letterSpacing: '0.1em',
          }}
        >
          Welcome to Our Restaurant
        </Typography>
      </Paper>

      <Box sx={{ my: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#333', color: '#fff' }}>
              <Typography variant="h5" gutterBottom>
                Fresh Ingredients
              </Typography>
              <Typography>
                We use only the freshest ingredients for all of our dishes.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#333', color: '#fff' }}>
              <Typography variant="h5" gutterBottom>
                Cozy Atmosphere
              </Typography>
              <Typography>
                Enjoy your meals in a warm and inviting environment.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button variant="contained" color="primary" size="large" sx={{ backgroundColor: '#ff4081' }}>
          Make a Reservation
        </Button>
      </Box>
    </Box>
  );
}

export default Home;