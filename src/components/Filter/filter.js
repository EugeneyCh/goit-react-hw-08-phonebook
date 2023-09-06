import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/users/slice';
import React from 'react';
import { TextField } from '@mui/material';

function Filter() {
  const dispatch = useDispatch();

  const saveFilterQuery = event => {
    const filterQuery = event.target.value;
    dispatch(updateFilter(filterQuery.trim().toLowerCase()));
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        fullWidth
        label="Find contacts by name"
        variant="outlined"
        type="text"
        onChange={saveFilterQuery}
      />
    </>
  );
}

export default Filter;
