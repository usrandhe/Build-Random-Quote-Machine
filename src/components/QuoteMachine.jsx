import React, { useState, useEffect } from 'react';
import QuoteBox from './QuoteBox';
import '../QuoteMachine.css';

const QuoteMachine = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-machine">
      {quote && <QuoteBox quote={quote} author={author} fetchQuote={fetchQuote} />}
    </div>
  );
};

export default QuoteMachine;
