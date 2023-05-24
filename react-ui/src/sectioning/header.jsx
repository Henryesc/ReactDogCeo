import React from 'react';
import { NavLink } from 'react-router-dom';
import data from '../mocks/navs.json';

const Header = () => {

  const navs = data.map((nav,index) => <NavLink key={nav} to={nav.href} key={`${nav.name}-${index}`}> {nav.name} </NavLink>);

  return (
    <header>
       <div className="y-wrap y-navs"> <img className="image" src= "https://p7.hiclipart.com/preview/760/225/292/logo-silhouette-dog-bone-dog.jpg" /> {navs} </div> 
    </header>
  );
};

export default Header;
