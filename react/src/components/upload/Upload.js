import React, { useState } from 'react'
import Alert from '@material-ui/lab/Alert'
import { useDropzone } from 'react-dropzone'
import { makeStyles } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
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

function FileWarning({ badUpload, setBadUpload }) {
    function dismissWarning() {
        setBadUpload(false)
    }
    if (badUpload) {
        return (
            <Alert severity="warning" onClose={dismissWarning}>
                Please upload a single image.
            </Alert>
        )
    }
    return null
}

export default function Upload(props) {
    const classes = useStyles()
    const theme = useTheme()

    const activeStyle = {
        borderColor: theme.palette.info.main,
    }
    const acceptStyle = {
        borderColor: theme.palette.success.main,
    }
    const rejectStyle = {
        borderColor: theme.palette.error.main,
    }

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

    const style = {
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {}),
    }

    return (
        <section className="upload">
            <div {...getRootProps({ style })} className={classes.dropzone}>
                <input {...getInputProps()} onChange={handleChange} />
                <p>Click to upload or drag and drop picture</p>
            </div>
            <FileWarning badUpload={badUpload} setBadUpload={setBadUpload} />
        </section>
    )
}
