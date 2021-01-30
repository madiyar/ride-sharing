import React from 'react';
import { Controller } from 'react-hook-form';
import { Card, CardContent, Grid, TextField, Typography } from '@material-ui/core';

const PhoneNumber = ({ control }) => (
  <Grid item xs={4}>
    <Card>
      <CardContent>
        <Typography variant="h4">Телефон нөміріңіз:</Typography>
        <Controller
          as={TextField}
          label="Телефон нөміріңіз"
          name="phone_number"
          control={control}
          rules={{ required: true, minLength: 6, maxLength: 200, validate: value => !!value.trim() }}
          margin="normal"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
      </CardContent>
    </Card>
  </Grid>
);

export default PhoneNumber;
