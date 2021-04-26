import React from 'react';
import { Controller } from 'react-hook-form';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { SelectCity } from 'components';

const City = ({ control, name, label, city, user }) => (
  <Grid item xs={12} md={4}>
    <Card>
      <CardContent>
        <Typography variant="h4">{label}</Typography>
        <Controller
          control={control}
          name={name} 
          rules={{ required: true }}
          render={(props) => (
            <SelectCity
              {...props}
              city={city}
              label={label}
              disabled={!user}
              onChange={(_, data) => props.onChange(data)}
            />
          )}
        />
      </CardContent>
    </Card>
  </Grid>
);

export default City;
