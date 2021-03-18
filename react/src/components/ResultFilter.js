import React from 'react'

export default function ResultFilter(props) {
    return (
        <>
            <input type="checkbox" name={props.name} />
            <label htmlFor={props.name}>{props.name}</label>
        </>
    )
}
