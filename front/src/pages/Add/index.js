import React from 'react';
import { Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';

// components
import Header from './Header';
import WhoAreYou from './WhoAreYou';
import City from './City';
import PhoneNumber from './PhoneNumber';

const AddPage = () => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      user: 'passenger',
      from: '',
      to: '',
      phone_number: JSON.parse(localStorage.getItem('user'))?.phone
    }
  })
  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <Grid container spacing={3} xs={8} style={{margin: `0 auto`}}>
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
        <PhoneNumber control={control} />
      </Grid>
    </form>
  );
};

export default AddPage;
