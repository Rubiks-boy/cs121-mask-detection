import React from 'react'
import ResultFilter from './ResultFilter'

const MASK_POSITION = ['none', 'incorrect', 'correct']

export default function Controls() {
    return (
        <ResultFilter mask_positions={MASK_POSITION} />
        // <form>
        //     {MASK_POSITION.map((x) => (
        //         <ResultFilter key={x + nanoid()} name={x} />
        //     ))}
        // </form>
    )
}
