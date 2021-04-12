import React from 'react'
import { Grid } from '@material-ui/core'
import MaskAnnotations from './MaskAnnotations'
// import Controls from '../controls/Controls'
import MaskTable from './MaskTable'

export default function MaskResults({ boxes, image }) {
    // Which categories are displayed, in order: correct, incorrect, no mask
    const [catsDisplayed, setCatsDisplayed] = React.useState([true, true, true])

    const onCheckEvent = [0, 1, 2].map((i) => {
        return (event) => {
            setCatsDisplayed((prevCatsDisp) => {
                const newCatsDisp = [...prevCatsDisp]
                newCatsDisp[i] = event.target.checked
                return newCatsDisp
            })
        }
    })

    return (
        <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
            <Grid item xs={12} md={7}>
                <MaskAnnotations boxes={boxes} image={image} catsDisplayed={catsDisplayed} />
            </Grid>
            <Grid container item direction="column" xs={12} sm={9} md={5}>
                <Grid item xs={12}>
                    <MaskTable boxes={boxes} showCat={catsDisplayed} onCheckEvent={onCheckEvent} />
                </Grid>
            </Grid>
        </Grid>
    )
}
