import React from 'react';
import PropTypes from 'prop-types';
import './searchResult.scss';

import TimeAgo from '@nteract/timeago'
import frenchStrings from '@nteract/timeago/lib/language-strings/fr'
import buildFormatter from '@nteract/timeago/lib/formatters/buildFormatter'

const formatter = buildFormatter(frenchStrings);

function Result({
    title, url, author, points, num_comments, created_at, getAuthor
}) {
    
   
  return (
    <div className="searchResult-content">
        <span className="searchResult-content-title">{ title }</span>
        <span className="searchResult-content-url">({ url })</span>
        <div className="searchResult-content-data">
          <a href="#">{points} points</a>
          <span>  |  </span>
          <a href="#" onClick={getAuthor(author)} >{author}</a>
          <span>  |  </span>
          <a href="#"><TimeAgo date={created_at} formatter={formatter} /></a>
          <span>  |  </span>
          <a href="#">{num_comments} comments</a>
        </div>
      </div>
  );
}

export default Result;

Result.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    num_comments: PropTypes.number.isRequired,
    getAuthor: PropTypes.func.isRequired,
    
};
