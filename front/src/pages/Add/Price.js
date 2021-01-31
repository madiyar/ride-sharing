import React from 'react';
import { Controller } from 'react-hook-form';
import { Card, CardContent, Grid, TextField, Typography } from '@material-ui/core';

const Price = ({ control }) => (
  <Grid item xs={4}>
    <Card>
      <CardContent>
        <Typography variant="h4">Бағасы</Typography>
        <Controller
          as={TextField}
          label="Бағасы"
          name="price"
          control={control}
          rules={{ required: true, min: 0, max: 10000, minLength: 1, maxLength: 5, validate: value => Number(value) }}
          margin="normal"
          variant="outlined"
          type="number"
          InputLabelProps={{ shrink: true }}
          InputProps={{ inputProps: { min: 1, max: 10000 } }}
          fullWidth
        />
      </CardContent>
    </Card>
  </Grid>
);

export default Price;
