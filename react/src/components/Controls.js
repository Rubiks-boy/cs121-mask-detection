import React from 'react';
import ResultFilter from './ResultFilter';

const MASK_POSITION = ['none', 'incorrect', 'correct'];

export default function Controls(props) {
    return (
        <form>
            {MASK_POSITION.map(x => <ResultFilter name={x}/>)}
        </form>
    )
}