import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

export default function Categories() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(checkStatus());
      }}
      type="button"
    >
      CHECK STATUS
    </button>
  );
}
