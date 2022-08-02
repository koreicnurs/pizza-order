import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const NavigationItems = () => {
  return (
    <ul className="Navigation-Items">
      <NavigationItem to="/" exact>Dishes</NavigationItem>
      <NavigationItem to="/orders" exact>Orders</NavigationItem>
      <NavigationItem to="/make" exact>Make Orders</NavigationItem>
    </ul>
  );
};

export default NavigationItems;