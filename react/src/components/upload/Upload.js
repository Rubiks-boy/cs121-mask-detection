import React, { useMemo } from 'react'
import { useDropzone } from 'react-dropzone'
import handleUpload from './UploadImage'

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
}
const activeStyle = {
    borderColor: '#2196f3',
}
const acceptStyle = {
    borderColor: '#00e676',
}
const rejectStyle = {
    borderColor: '#ff1744',
}

export default function Upload(props) {
    const handleChange = handleUpload(props.updateImage, props.updateMasks, props.setLoading)

    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
        onDropAccepted: handleChange,
        accept: 'image/*',
        multiple: false,
    })

    const style = useMemo(
        () => ({
            ...baseStyle,
            ...(isDragActive ? activeStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
        }),
        [isDragActive, isDragReject, isDragAccept]
    )

    return (
        <section className="upload">
            <div {...getRootProps({ className: 'dropzone', style })}>
                <input {...getInputProps()} onChange={handleChange} />
                <p>Drag and drop picture here</p>
            </div>
        </section>
    )
}
