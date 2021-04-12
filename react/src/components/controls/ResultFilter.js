import React from 'react'
import { nanoid } from 'nanoid'
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core'
import './Controls.css'

export default function ResultFilter(props) {
    return (
        <FormGroup row>
            {props.mask_positions.map((x) => (
                <FormControlLabel
                    key={x + nanoid()}
                    control={<Checkbox defaultChecked name={x} />}
                    label={x}
                />
            ))}
        </FormGroup>
    )
}
