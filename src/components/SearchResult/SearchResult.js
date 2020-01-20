import React from 'react';
import PropTypes from 'prop-types';
import './searchResult.scss';

import Result from './Result';


function SearchResult({ data, getAuthor }) {
  console.log(data);
  
  return (
    <div className="searchResult">
      {data.map(resp => (        
        <Result key={resp.title} {...resp} getAuthor={getAuthor} />
      ))}      
    </div>
  );
}

SearchResult.propTypes = {
  getAuthor: PropTypes.func.isRequired,
};

export default SearchResult;
