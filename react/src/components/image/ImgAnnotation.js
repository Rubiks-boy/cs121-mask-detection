import React from 'react'
import './ImgAnnotation.css'
import { Box } from '@material-ui/core'

const CSS_BLOCK = 'face-box'
const MASK_POSITION = {
    0: `${CSS_BLOCK}--none`,
    1: `${CSS_BLOCK}--incorrect`,
    2: `${CSS_BLOCK}--correct`,
}

export default function ImgAnnotation(props) {
    return (
        <Box
            position="absolute"
            className={[CSS_BLOCK, MASK_POSITION[props.result]].join(' ')}
            top={`${props.top}%`}
            height={`${props.bottom - props.top}%`}
            left={`${props.left}%`}
            width={`${props.right - props.left}%`}
        />
    )
}
