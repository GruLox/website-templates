import React from 'react';
import { Typography, Box } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h3" gutterBottom>About Us</Typography>
      <Typography variant="body1">
        We are a family-owned restaurant that has been serving the community for over 20 years...
      </Typography>
    </Box>
  );
}

export default About;
