import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Input, Form } from 'semantic-ui-react'
import './searchBar.scss';

function SearchBar({
  inputValue, changeInput, doSearch, loading, returnHome
}) {
  const handleChange = (e) => {
    const { value } = e.target;
    changeInput(value);    
  };
  
  return (
    <div className="searchBar">
      <Form onSubmit={doSearch}>
        <Segment className="searchBar-segment">
          <div className="logo" onClick={returnHome} >
            <div className="logo-image">h</div>
            <div className="logo-name">
              <div>Search</div>
              <div>Haecker News</div>
            </div>
          </div>
          <Input 
            value={inputValue}
            onChange={handleChange}  
            loading={loading}                    
            className="searchBar-segment-input"
            icon="search"
            iconPosition='left'
            fluid
            placeholder='Search stories by title, url or author'
          />
        </Segment>
      </Form>
    </div>
  );
}

SearchBar.propTypes = {
  inputValue: PropTypes.string.isRequired,
  changeInput: PropTypes.func.isRequired,
  doSearch: PropTypes.func.isRequired,
  returnHome: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  
};

export default SearchBar;
