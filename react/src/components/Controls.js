import React from 'react'
import { nanoid } from 'nanoid'
import ResultFilter from './ResultFilter'

const MASK_POSITION = ['none', 'incorrect', 'correct']

export default function Controls() {
    return (
        <form>
            {MASK_POSITION.map((x) => (
                <ResultFilter key={x + nanoid()} name={x} />
            ))}
        </form>
    )
}
