import React from 'react';
import { Controller } from 'react-hook-form';
import { Card, CardContent, Grid, TextField, Typography } from '@material-ui/core';

const Seats = ({ control }) => (
  <Grid item xs={4}>
    <Card>
      <CardContent>
        <Typography variant="h4">Бос орын саны</Typography>
        <Controller
          as={TextField}
          label="Бос орын саны"
          name="seats"
          control={control}
          rules={{ required: true, min: 0, max: 5, minLength: 1, maxLength: 1, validate: value => Number(value) }}
          margin="normal"
          variant="outlined"
          type="number"
          InputLabelProps={{ shrink: true }}
          InputProps={{ inputProps: { min: 1, max: 5 } }}
          fullWidth
        />
      </CardContent>
    </Card>
  </Grid>
);

export default Seats;
