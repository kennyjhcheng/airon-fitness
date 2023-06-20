/* eslint-disable react/jsx-props-no-spreading */
import CheckIcon from '@mui/icons-material/Check';
import {
  Autocomplete, Container, Grid, MenuItem, TextField,
} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import { inputGridSizing } from './Form';
import GridInputLabel from './GridInputLabel';

export default function FormMultiSelect(props) {
  const {
    id,
    label,
    half,
    value,
    setValue,
    options,
  } = props;

  return (
    <Container sx={{
      display: 'flex',
      alignItems: 'center',
    }}
    >

      <GridInputLabel
        id={id}
        label={label}
      />
      <Grid item xs={12} sm={inputGridSizing(half)}>
        <Autocomplete
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          sx={{ m: 1, width: '100%' }}
          multiple
          id="tags-standard"
          options={options}
          getOptionLabel={(option) => option}
          disableCloseOnSelect
          renderOption={(menuItemProps, option, { selected }) => (
            <MenuItem
              {...menuItemProps}
              key={option}
              value={option}
              sx={{ justifyContent: 'space-between' }}
            >
              {option}
              {selected ? <CheckIcon color="info" /> : null}
            </MenuItem>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label={label}
              placeholder={label}
            />
          )}
        />
      </Grid>
    </Container>
  );
}

FormMultiSelect.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  half: PropTypes.bool,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  setValue: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

FormMultiSelect.defaultProps = {
  half: false,
};