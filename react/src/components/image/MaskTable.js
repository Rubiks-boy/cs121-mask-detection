import React from 'react'

export default function MaskTable({ boxes }) {
    const numNoMasks = boxes.filter((x) => x.result === 0).length
    const numIncorrectMasks = boxes.filter((x) => x.result === 1).length
    const numGoodMasks = boxes.filter((x) => x.result === 2).length
    return (
        <table>
            <tr>
                <td>Masks</td>
                <td>{numGoodMasks}</td>
            </tr>
            <tr>
                <td>Incorrect Masks</td>
                <td>{numIncorrectMasks}</td>
            </tr>
            <tr>
                <td>No Masks</td>
                <td>{numNoMasks}</td>
            </tr>
        </table>
    )
}
