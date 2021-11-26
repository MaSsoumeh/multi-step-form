import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';

export default function InputField(props) {
  const { ...rest } = props;
  const [field, meta] = useField(props);
  function _renderHelperText() {
    // const [touched, error] = at(meta, 'touched', 'error');refactored this line with pure js in below line
    const touched = meta.touched;
    const error = meta.error;
    if (touched && error) {
      return error;
    }
  }

  return (
    <TextField
      type='text'
      error={meta.touched && meta.error && true}
      helperText={_renderHelperText()}
      {...field}
      {...rest}
    />
  );
}
