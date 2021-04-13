import React from 'react'
import { Container, Box, LinearProgress } from '@material-ui/core'
import { nanoid } from 'nanoid'
import './MaskResults.css'
import ImgAnnotation from './ImgAnnotation'

// eslint-disable-next-line
export default function MaskAnnotations({ boxes, image, catsDisplayed, loading }) {
    const boxesToDisplay = boxes.filter((x) => catsDisplayed[x.result])

    return (
        <Box position="relative">
            <Container component="mask-detector-results" maxWidth="sm">
                {boxesToDisplay.map((x) => (
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    <ImgAnnotation key={x + nanoid()} {...x} />
                ))}
                <img src={image} className="mask-detector-results__img" alt="Face mask results" />
                {/* Show loading bar while loading */}
                {loading && <LinearProgress color="secondary" />}
            </Container>
        </Box>
    )
}
