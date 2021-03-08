import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Autocomplete } from '@material-ui/lab';
import { InputAdornment, TextField } from '@material-ui/core';
import { Icon } from 'components';
import { getCities } from 'store/helpers/actions';

const SelectCity = ({ label, loading, cities, getCities, city, error, ...props }) => {
  useEffect(() => {
    if (!cities.length) getCities();
  }, [cities, getCities]);

  return (
    <Autocomplete
      options={(city ? cities.filter(i => i !== city) : cities) || []}
      getOptionLabel={(option) => option.name}
      groupBy={(option) => option.region}
      noOptionsText={'Қала табылмады'}
      loading={loading}
      loadingText={'Қалалар тізімі жүктеліп жатыр...'}
      autoHighlight
      fullWidth
      {...props}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          margin="normal"
          variant="outlined"
          error={error}
          helperText={error && 'Қала таңдаңыз'}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <Icon.MapPin size={16} />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

const mapState = ({ helpers }) => ({
  loading: helpers.cities.loading,
  cities: helpers.cities.data,
});

export default connect(mapState, { getCities })(SelectCity);
