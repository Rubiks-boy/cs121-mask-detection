import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Container from '@material-ui/core/Container'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import Box from '@material-ui/core/Box'
import Alert from '@material-ui/lab/Alert'
import { withStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    alert: {
        spacing: theme.spacing(8),
    },
}))

const getCheckboxColor = (theme, i) => {
    const colors = [theme.palette.error, theme.palette.warning, theme.palette.success]
    return colors[i].main
}

const MaskTableRow = (row, index) => {
    const CurrCellCheckbox = withStyles(
        (theme) => ({
            root: {
                color: getCheckboxColor(theme, index),
            },
        }),
        { withTheme: true }
    )((props) => (
        <Checkbox
            checked={row.checked}
            disabled={row.num === 0}
            indeterminate={row.num === 0}
            onChange={row.onCheckEvent}
            color="default"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        />
    ))

    return (
        <TableRow key={row.name}>
            <TableCell padding="checkbox">
                <CurrCellCheckbox />
            </TableCell>
            <TableCell component="th" scope="row">
                {row.name}
            </TableCell>
            <TableCell align="right">{row.num}</TableCell>
        </TableRow>
    )
}

export default function MaskTable({ boxes, showCat, onCheckEvent, loading, image }) {
    const classes = useStyles()

    const names = ['No Mask', 'Incorrect Mask', 'Mask']
    const nums = [0, 1, 2].map((i) => boxes.filter((x) => x.result === i).length)

    const zero = nums.reduce((a, b) => a + b, 0) === 0
    const noFaceAlert = !image && !loading && zero

    const rows = [0, 1, 2].map((i) => {
        return {
            name: names[i],
            num: nums[i],
            checked: showCat[i],
            onCheckEvent: onCheckEvent[i],
        }
    })

    return (
        <Container component="mask-detector-results">
            <Box mb={1}>
                {noFaceAlert && (
                    <Alert severity="info" className={classes.alert}>
                        No Faces Detected
                    </Alert>
                )}
            </Box>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Classification</TableCell>
                            <TableCell align="right">Number of Faces</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{rows.map(MaskTableRow)}</TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}
