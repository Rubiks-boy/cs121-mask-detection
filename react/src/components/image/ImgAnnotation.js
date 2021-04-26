import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    faceBox: {
        outline: '5px solid',
        boxShadow: '0 0 10px black',
        '&:hover': {
            outlineWidth: '8px',
        },
    },
    faceBoxCorrect: {
        outlineColor: 'lime',
    },
    faceBoxIncorrect: {
        outlineColor: 'yellow',
    },
    faceBoxNone: {
        outlineColor: 'red',
    },
}))

const classificationColor = (result, classes) => {
    const colors = {
        0: classes.faceBoxNone,
        1: classes.faceBoxIncorrect,
        2: classes.faceBoxCorrect,
    }
    return colors[result]
}

export default function ImgAnnotation(props) {
    const classes = useStyles()

    return (
        <Box
            position="absolute"
            className={[classes.faceBox, classificationColor(props.result, classes)]}
            top={`${props.top}%`}
            height={`${props.bottom - props.top}%`}
            left={`${props.left}%`}
            width={`${props.right - props.left}%`}
        />
    )
}
