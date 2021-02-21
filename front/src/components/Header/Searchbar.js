import React, { useEffect, useState } from 'react';
import { CircularProgress, InputAdornment, TextField, Typography } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { getCities } from 'store/helpers/actions';
import { Icon } from 'components';
import { history } from 'lib/helpers';

let TIMER;
const INTERVAL = 500;

const styles = {
  option: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  type: {
    color: '#444',
    fontSize: 12,
    textTransform: 'uppercase'
  }
};

const Searchbar = () => {
  const dispatch = useDispatch();
  const { data, loading: citiesLoading } = useSelector(state => state.helpers.cities);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (!data || !data?.length) {
      dispatch(getCities());
    }
  }, [data, dispatch]);

  useEffect(() => {
    setLoading(citiesLoading);
  }, [citiesLoading]);

  const handleSearch = (e, val) => {
    setLoading(true);
    clearTimeout(TIMER);
    TIMER = setTimeout(() => {
      setLoading(false);
    }, INTERVAL);
    if (!cities.length) {
      const list = [];
      data.forEach(city => {
        list.push({ ...city, type: 'Қайдан?' });
        list.push({ ...city, type: 'Қайда?' });
      });
      setCities(list);
    }
  };

  const handleSelect = (e, val) => {
    if (val) {
      history.push(`/search/${val?.type === 'Қайдан?' ? 'from' : 'to'}/${val?.id}`);
    }
  };

  return (
    <div style={{ minWidth: focus ? 400 : 200 }}>
      <Autocomplete
        options={cities}
        id="search"
        getOptionLabel={(option) => option.name || ''}
        groupBy={(option) => option.region}
        renderOption={(option) => (
          <div style={styles.option}>
            <Typography noWrap>
              {option.name}
            </Typography>
            <Typography noWrap style={styles.type}>
              {option.type}
            </Typography>
          </div>
        )}
        onInputChange={handleSearch}
        onChange={handleSelect}
        noOptionsText={'Қала табылмады'}
        loadingText={'...'}
        loading={loading}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        disableClearable
        autoHighlight
        fullWidth
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Іздеу"
            size="small"
            fullWidth
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <InputAdornment position="start">
                  {loading ? <CircularProgress size={16} /> : <Icon.Search size="16" />}
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </div>
  );
};

export default Searchbar;
