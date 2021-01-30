import React from 'react';
import { Controller } from 'react-hook-form';
import { Card, CardContent, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@material-ui/core';

const WhoAreYou = ({ control }) => (
  <Grid item xs={4}>
    <Card>
      <CardContent>
        <Typography variant="h4">Сіз кімсіз?</Typography>
        <Controller
          rules={{ required: true }}
          control={control}
          name="user"
          as={
            <RadioGroup>
              <FormControlLabel
                value="passenger"
                control={<Radio />}
                label="Жолаушы"
              />
              <FormControlLabel
                value="driver"
                control={<Radio />}
                label="Жүргізуші"
              />
            </RadioGroup>
          }
        />
      </CardContent>
    </Card>
  </Grid>
);

export default WhoAreYou;
