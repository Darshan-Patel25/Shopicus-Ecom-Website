import React from 'react';
import './breadcrum.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const Breadcrumbs = ({ product }) => {
  return (
    <div className='breadcrumbs'>
      HOME <FontAwesomeIcon icon={faGreaterThan} /> SHOP <FontAwesomeIcon icon={faGreaterThan} /> 
      {product.category} <FontAwesomeIcon icon={faGreaterThan} /> {product.name}
    </div>
  );
};

export default Breadcrumbs;
