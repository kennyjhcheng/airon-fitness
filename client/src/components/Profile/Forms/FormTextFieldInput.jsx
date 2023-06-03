import React from 'react';
import { Grid, InputLabel, TextField } from '@mui/material';
import PropTypes from 'prop-types';

export default function FormTextFieldInput(props) {
  const {
    id,
    label,
    half,
    value,
    setValue,
    type,
    multiline,
  } = props;

  return (
    <>
      <Grid item xs={12} sm={2}>
        <InputLabel
          sx={{
            display: 'flex',
            justifyContent: 'center',
            fontWeight: 700,
            wordWrap: 'break-word',
            whiteSpace: 'normal',
          }}
          htmlFor={id}
          id={`${id}-label`}
        >
          {label}
        </InputLabel>
      </Grid>
      <Grid item xs={12} sm={half ? 4 : 10}>
        <TextField
          required
          id={id}
          name={id}
          label={label}
          fullWidth
          size="small"
          autoComplete="off"
          variant="outlined"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type={type}
          multiline={multiline}
        />
      </Grid>
    </>
  );
}

FormTextFieldInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  half: PropTypes.bool,
  multiline: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string,
};

FormTextFieldInput.defaultProps = {
  half: false,
  multiline: false,
  type: null,
};
