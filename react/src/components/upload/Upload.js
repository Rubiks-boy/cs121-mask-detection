import React, { useMemo, useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import { useDropzone } from 'react-dropzone'
import { makeStyles } from '@material-ui/core'
import handleUpload from './UploadImage'

const useStyles = makeStyles((theme) => ({
    dropzone: {
        padding: '20px',
        borderWidth: 2,
        borderRadius: 2,
        borderStyle: 'dashed',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.secondary,
        outline: 'none',
        transition: 'border .24s ease-in-out',
        cursor: 'pointer',
    },
}))

const activeStyle = {
    borderColor: '#2196f3',
}
const acceptStyle = {
    borderColor: '#00e676',
}
const rejectStyle = {
    borderColor: '#ff1744',
}

function FileWarning({ badUpload, setBadUpload }) {
    function dismissWarning() {
        setBadUpload(false)
    }
    if (badUpload) {
        return (
            <Alert variant="warning" onClose={dismissWarning} dismissible>
                Please only upload a single image.
            </Alert>
        )
    }
    return null
}

export default function Upload(props) {
    const classes = useStyles()

    const [badUpload, setBadUpload] = useState(false)
    const uploadImage = handleUpload(props.updateImage, props.updateMasks, props.setLoading)
    function handleChange(e) {
        uploadImage(e)
        setBadUpload(false)
    }

    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
        onDropAccepted: handleChange,
        onDropRejected: () => setBadUpload(true),
        accept: 'image/*',
        multiple: false,
    })

    const style = useMemo(
        () => ({
            ...(isDragActive ? activeStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
        }),
        [isDragActive, isDragReject, isDragAccept]
    )

    return (
        <section className="upload">
            <div {...getRootProps({ style })} className={classes.dropzone}>
                <input {...getInputProps()} onChange={handleChange} />
                <p>Drag and drop picture here</p>
            </div>
            <FileWarning badUpload={badUpload} setBadUpload={setBadUpload} />
        </section>
    )
}
