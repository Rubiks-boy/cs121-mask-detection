import React from 'react'
import { Container } from '@material-ui/core'
import { nanoid } from 'nanoid'
import './MaskResults.css'
import Box from './Box'

export default function MaskAnnotations({ boxes, image }) {
    return (
        <Container component="mask-detector-results">
            {boxes.map((x) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <Box key={x + nanoid()} {...x} />
            ))}
            <img src={image} className="mask-detector-results__img" alt="Face mask results" />
        </Container>
    )
}
