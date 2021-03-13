import React from 'react';
import './Box.css';

const CSS_BLOCK = 'face-box'
const MASK_POSITION = {
    0: `${CSS_BLOCK}__none`,
    1: `${CSS_BLOCK}__incorrect`,
    2: `${CSS_BLOCK}__correct`
}

export default function Box(props) {
    console.log(props);
    return (
        <div
            className={[CSS_BLOCK, MASK_POSITION[props.result]].join(' ')}
            style={{
                top: `${props.top}%`,
                height: `${props.bottom-props.top}%`,
                left: `${props.left}%`,
                width: `${props.right-props.left}%`,
            }}
        />
    )
}