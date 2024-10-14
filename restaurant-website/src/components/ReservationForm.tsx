import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

const ReservationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState<Date | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="h4" gutterBottom>Make a Reservation</Typography>
      <TextField
        label="Name"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        margin="normal" />
        
        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Reservation Date"
          value={date}
          onChange={(newDate) => setDate(newDate)}
          slotProps={{ textField: { fullWidth: true } }}
        />
      </LocalizationProvider> */}
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
}

export default ReservationForm;