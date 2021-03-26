import React from 'react'
import { nanoid } from 'nanoid'
import './MaskResults.css'
import Box from './Box'

export default function MaskResults(props) {
    return (
        <div className="mask-detector-results">
            {props.boxes.map((x) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <Box key={x + nanoid()} {...x} />
            ))}
            <img src={props.image} className="mask-detector-results__img" alt="Face mask results" />
        </div>
    )
}
