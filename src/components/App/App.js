import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './app.scss';

import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import TagAuthor from '../TagAuthor/TagAuthor';


//import data from '../../data/data';


function App() {
  const [state, setState] = useState({
    data: [],
    searchInput: '',
    loading: false,
    view: 'search',
  });

  //debugger;

  // useEffect(()=> {
  //   //doSearch();
  // }, [])

  const doSearch = (e) => {
    e.preventDefault();
    setState({
      ...state,
      loading: true,
    });

    axios.get(`http://hn.algolia.com/api/v1/search?query=${state.searchInput}`)
  .then(function (response) {
    setState({
      ...state,
      data: response.data.hits, 
    });
    console.log(response.data.hits);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    
  });
  };

  const changeInput = value => {
    setState({
      ...state,
      searchInput: value,
    });
  };

  const returnHome = () => {
    setState({
      ...state,
      view: 'search',
    });
  };

  const getAuthor = (authorName) => () => {
    axios.get(`https://hn.algolia.com/api/v1/search?tags=author_${authorName}`)
      .then(function (response) {
        setState({
          ...state,
          view: 'author',
          
        });
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        
      });
  };
  
  return (
    <div className="app">
      <SearchBar 
        inputValue={state.searchInput}
        changeInput={changeInput}
        doSearch={doSearch}
        loading={state.loading}
        returnHome={returnHome}
      />
      {state.view==='search' && <SearchResult data={state.data} getAuthor={getAuthor} />}
      {state.view==='author' && <TagAuthor data={state.data} />}

      
    </div>
  );
}

export default App;
