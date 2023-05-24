import React from 'react';
import { selectBreeds } from '../features/breedsSlice';
import { useSelector } from 'react-redux';

const Breeds = () => {

  const data = useSelector(selectBreeds);

  const breeds = data && data.map (breed => {
    return <li>{breed}</li>;
    })

  return (
    <>
      <h1>Breeds</h1>
      <ul>{breeds}</ul>
    </>
  )
};

export default Breeds;
