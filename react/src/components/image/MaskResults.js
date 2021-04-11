import React from 'react'
import MaskAnnotations from './MaskAnnotations'
import MaskTable from './MaskTable'

export default function MaskResults(props) {
    return (
        <>
            <MaskAnnotations {...props} />
            <MaskTable boxes={props.boxes} />
        </>
    )
}
