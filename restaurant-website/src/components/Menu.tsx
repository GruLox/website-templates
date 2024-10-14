import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const dishes = [
  { name: 'Dish 1', description: 'Delicious dish', image: 'images/dish1.jpg' },
  { name: 'Dish 2', description: 'Tasty meal', image: 'images/dish2.jpg' },
  // More dishes
];

const Menu: React.FC = () => {
  return (
    <Grid container spacing={4}>
      {dishes.map((dish, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={dish.image}
              alt={dish.name}
            />
            <CardContent>
              <Typography variant="h6">{dish.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {dish.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Menu;
