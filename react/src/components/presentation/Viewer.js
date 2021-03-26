import React from 'react'
import MaskDetectorResults from './MaskDetectorResults'
import Controls from './Controls'

export default function Viewer(props) {
    return (
        <div>
            <MaskDetectorResults image={props.image} boxes={props.boxes} />
            <Controls />
        </div>
    )
}
