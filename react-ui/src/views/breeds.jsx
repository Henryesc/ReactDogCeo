import React from 'react';
import { selectBreeds } from '../features/breedsSlice';
import { useSelector } from 'react-redux';

const Breeds = () => {

  const data = useSelector(selectBreeds);

  const handleClick = e => {
    console.log(e.target.dataset.breed);
  }

  const breeds = data && data.map (breed => {
    return <li data-breed={breed} key={breed} onClick={handleClick}>{breed}</li>;
    })

  return (
    <>
      <h1>Breeds</h1>
      <ul>{breeds}</ul>
    </>
  )
};

export default Breeds;
