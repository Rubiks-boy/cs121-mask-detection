import React from 'react'
import { nanoid } from 'nanoid'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
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
