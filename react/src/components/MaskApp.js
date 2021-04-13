import React, { useState } from 'react'
import { Container, Grid } from '@material-ui/core'
import MaskResults from './image/MaskResults'
import Upload from './upload/Upload'

export default function MaskApp() {
    const [image, updateImage] = useState(null)
    const [masks, updateMasks] = useState([])
    // eslint-disable-next-line
    const [loading, setLoading] = useState(false)
    return (
        <Container component="main" maxWidth="lg">
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                crossOrigin="anonymous"
            />
            <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
                <Grid item xs={12}>
                    <Upload
                        updateImage={updateImage}
                        updateMasks={updateMasks}
                        setLoading={setLoading}
                    />
                </Grid>
                <Grid item xs={12}>
                    <MaskResults image={image} boxes={masks} loading={loading} />
                </Grid>
            </Grid>
        </Container>
    )
}
