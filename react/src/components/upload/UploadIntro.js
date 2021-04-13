import React from 'react'
import handleUpload from './UploadImage'

export default function UploadIntro(props) {
    const handleChange = handleUpload(props.updateImage, props.updateMasks)
    return <input type="file" onChange={handleChange} />
}
