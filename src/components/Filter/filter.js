import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/users/selectors';
import { updateFilter } from 'redux/users/slice';
import React, { useRef } from 'react';

import css from './Filter.module.css';

function Filter() {
  const filter = useSelector(getFilter);
  console.log('Filter search is...', filter);
  const filterQueryRef = useRef();
  const dispatch = useDispatch();

  const saveFilterQuery = filter => {
    dispatch(
      updateFilter((filter = filterQueryRef.current.value.trim().toLowerCase()))
    );
  };

  return (
    <label className={css.findZone}>
      Find contacts by name
      <input ref={filterQueryRef} type="text" onChange={saveFilterQuery} />
    </label>
  );
}

export default Filter;
