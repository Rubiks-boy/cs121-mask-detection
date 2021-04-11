import React, { useState } from 'react'
import MaskResults from './image/MaskResults'
import Controls from './controls/Controls'
import Upload from './upload/Upload'

export default function MaskApp() {
    const [image, updateImage] = useState(null)
    const [masks, updateMasks] = useState([])
    return (
        <>
            <Upload updateImage={updateImage} updateMasks={updateMasks} />
            <MaskResults image={image} boxes={masks} />
            <Controls />
        </>
    )
}
