import React, { useEffect} from 'react';
import { selectQuotes, loadQuotes } from './QuotesSlice';
import { useSelector, useDispatch } from 'react-redux';
import './Quotes.css';

export function Quotes() {
    const dispatch = useDispatch();
    const quotes = useSelector(selectQuotes);
    const quotesArray = quotes[0];
    let quote;

    useEffect(() => {
        dispatch(loadQuotes());
    }, [dispatch])

    if(quotesArray !== undefined) {
        quote = quotesArray[Math.floor(Math.random()*quotesArray.length)];
    }
    return (
        <div className='quote-container'>
            <h3>"{quote !== undefined ? quote.text : ''}"</h3>
            <h4>-{quote !== undefined ? quote.author : ''}</h4>
        </div>
    )
}