import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const Contact: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <TextField
        label="Message"
        fullWidth
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Send
      </Button>
    </Box>
  );
}

export default Contact;
