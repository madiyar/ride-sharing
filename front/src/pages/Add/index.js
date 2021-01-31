import React, { useEffect } from 'react';
import { connect } from 'react-redux';
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

import { addTrip } from 'store/trips/actions';

const AddPage = ({ addTrip }) => {
  const { control, handleSubmit, watch, setValue, register } = useForm({
    defaultValues: {
      user_type: 'driver',
      from: '',
      to: '',
      day: moment().format('YYYY-MM-DD'),
      seats: 1,
      price: 1,
    }
  });
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    register({ name: 'day', required: true, validate: val => !!val.trim() });
  }, []);

  const onSubmit = data => {
    if (data?.user_type === 'driver') {
      addTrip({
        user_type: data?.user_type,
        day: data?.day,
        seats: data?.seats,
        price: data?.price,
        driverId: user?.id,
        fromId: data?.from.id,
        toId: data?.to.id
      });
    } else if (data?.user_type === 'passenger') {
      addTrip({
        user_type: data?.user_type,
        day: data?.day,
        userId: user?.id,
        fromId: data?.from.id,
        toId: data?.to.id
      });
    }
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
        {watch('user_type') === 'driver' && (
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

export default connect(null, { addTrip })(AddPage);
