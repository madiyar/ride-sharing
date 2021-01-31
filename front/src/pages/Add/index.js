import React, { useEffect } from 'react';
import { Button, Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import moment from 'moment';

// components
import Header from './Header';
import WhoAreYou from './WhoAreYou';
import City from './City';
import Day from './Day';
import Seats from './Seats';
import Price from './Price';

const AddPage = () => {
  const { control, handleSubmit, watch, setValue, register } = useForm({
    defaultValues: {
      user: 'driver',
      from: '',
      to: '',
      day: moment().format('YYYY-MM-DD'),
      seats: 1,
      price: 1,
    }
  });

  useEffect(() => {
    register({ name: 'day', required: true, validate: val => !!val.trim() });
  }, []);

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3} xs={8} style={{ margin: `0 auto` }}>
        <Header />
        <WhoAreYou control={control} />
        <City
          control={control}
          name="from"
          label="Қайдан шығасыз?"
          city={watch('to')}
        />
        <City
          control={control}
          name="to"
          label="Қайда барасыз?"
          city={watch('from')}
        />
        <Day value={watch('day')} setValue={day => setValue('day', day)} />
        {watch('user') === 'driver' && (
          <>
            <Seats control={control} />
            <Price control={control} />
          </>
        )}
        <Grid item xs={12}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            type="submit"
            style={{
              fontSize: 24,
              padding: `24px auto`
            }}
            fullWidth
          >
            ОК
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddPage;
