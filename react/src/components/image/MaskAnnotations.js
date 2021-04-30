import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import LinearProgress from '@material-ui/core/LinearProgress'
import { makeStyles } from '@material-ui/core'
import { nanoid } from 'nanoid'
import ImgAnnotation from './ImgAnnotation'

const useStyles = makeStyles(() => ({
    imgContainer: {
        display: 'initial',
    },
    img: {
        width: '100%',
    },
}))

// eslint-disable-next-line
export default function MaskAnnotations({ boxes, image, catsDisplayed, loading }) {
    const classes = useStyles()
    const boxesToDisplay = boxes.filter((x) => catsDisplayed[x.result])

    return (
        <Box position="relative">
            <Container className={classes.imgContainer} disableGutters maxWidth="sm">
                {boxesToDisplay.map((x) => (
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    <ImgAnnotation key={x + nanoid()} {...x} />
                ))}
                <img src={image} className={classes.img} alt="Face mask results" />
                {/* Show loading bar while loading */}
                {loading && <LinearProgress color="primary" />}
            </Container>
        </Box>
    )
}
