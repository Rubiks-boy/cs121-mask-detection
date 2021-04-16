import React from 'react'
import Container from '@material-ui/core/Container'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'

export default function MaskTable({ boxes, showCat, onCheckEvent }) {
    // const numNoMasks = boxes.filter((x) => x.result === 0).length
    // const numIncorrectMasks = boxes.filter((x) => x.result === 1).length
    // const numGoodMasks = boxes.filter((x) => x.result === 2).length

    const names = ['No Mask', 'Incorrect Mask', 'Mask']
    const nums = [0, 1, 2].map((i) => boxes.filter((x) => x.result === i).length)

    const rows = [0, 1, 2].map((i) => {
        return { name: names[i], num: nums[i], checked: showCat[i], onCheckEvent: onCheckEvent[i] }
    })

    return (
        <Container component="mask-detector-results">
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Classification</TableCell>
                            <TableCell align="right">Number of Faces</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell padding="checkbox">
                                    <Checkbox checked={row.checked} onChange={row.onCheckEvent} />
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.num}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}
