import React from 'react'
import MaskResults from './MaskResults'
import Controls from './Controls'

export default function Viewer(props) {
    return (
        <div>
            <MaskResults image={props.image} boxes={props.boxes} />
            <Controls />
        </div>
    )
}
