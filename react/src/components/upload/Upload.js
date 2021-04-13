import React from 'react'
import { useDropzone } from 'react-dropzone'
import handleUpload from './UploadImage'

export default function Upload(props) {
    const handleChange = handleUpload(props.updateImage, props.updateMasks, props.setLoading)

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: handleChange,
    })

    return (
        <section className="upload">
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} onChange={handleChange} />
                <p>Drag and drop picture here</p>
            </div>
        </section>
    )
}
