import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import MaskResults from './image/MaskResults'
import Upload from './upload/Upload'

const useStyles = makeStyles((theme) => ({
    content: {
        padding: theme.spacing(4),
    },
}))

export default function MaskApp() {
    const classes = useStyles()

    const [image, updateImage] = useState(null)
    const [masks, updateMasks] = useState([])
    const [loading, setLoading] = useState(false)
    return (
        <Container component="main" maxWidth="lg" className={classes.content}>
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
