import React, { useState } from 'react'
import { Container, Grid } from '@material-ui/core'
import MaskResults from './image/MaskResults'
import Upload from './upload/Upload'

export default function MaskApp() {
    const [image, updateImage] = useState(null)
    const [masks, updateMasks] = useState([])
    return (
        <Container component="main" maxWidth="md">
            <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
                <Grid item xs={12}>
                    <Upload updateImage={updateImage} updateMasks={updateMasks} />
                </Grid>
                <Grid item xs={12}>
                    <MaskResults image={image} boxes={masks} />
                </Grid>
            </Grid>
        </Container>
    )
}
