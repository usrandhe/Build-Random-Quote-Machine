import React from 'react';

const QuoteBox = ({ quote, author, fetchQuote }) => {
  return (
    <div id="quote-box">
      <p id="text"><i className="fa fa-quote-left"> </i>{quote}</p>
      <p id="author">- {author}</p>
      <div className="button">
        <button id="new-quote" className="button" onClick={fetchQuote} 
        style={{ backgroundColor: 'rgb(44, 62, 80)' }}>
          New Quote
        </button>
        <a className='button' style={{ backgroundColor: 'rgb(44, 62, 80)' }}
          id="tweet-quote" 
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${quote}" - ${author}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-twitter"></i>

        </a>
      </div>

    </div>
  );
};

export default QuoteBox;
