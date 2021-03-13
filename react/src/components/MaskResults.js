import React from 'react';
import './MaskResults.css';
import Box from './Box';

export default function MaskResults(props) {
    return (
        <div className='mask-results'>
            {props.boxes.map(x => <Box {...x}/>)}
            <img src={props.image} alt='Face mask results'/>
        </div>
    )
}