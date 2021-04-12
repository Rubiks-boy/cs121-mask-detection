import React from 'react'
// import Badge from '@material-ui/core/Badge'
import './Box.css'
import { Box } from '@material-ui/core'

const CSS_BLOCK = 'face-box'
const MASK_POSITION = {
    0: `${CSS_BLOCK}--none`,
    1: `${CSS_BLOCK}--incorrect`,
    2: `${CSS_BLOCK}--correct`,
}

export default function Box2(props) {
    console.log(props)
    return (
        // <Badge badgeContent={props.result}>
        //     <div
        //         className={[CSS_BLOCK, MASK_POSITION[props.result]].join(' ')}
        //         style={{
        //             top: `${props.top}%`,
        //             height: `${props.bottom - props.top}%`,
        //             left: `${props.left}%`,
        //             width: `${props.right - props.left}%`,
        //         }}
        //     />
        // </Badge>
        // <div
        //     className={[CSS_BLOCK, MASK_POSITION[props.result]].join(' ')}
        //     style={{
        //         top: `${props.top}%`,
        //         height: `${props.bottom - props.top}%`,
        //         left: `${props.left}%`,
        //         width: `${props.right - props.left}%`,
        //     }}
        // />
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
