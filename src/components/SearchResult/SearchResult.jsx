import React from 'react'
import './SearchResult.css'

export default function SearchResult({ result }) {
    return (
        <div className='results'>
            {result.map((state, idx) => {
                return <div
                    className='individual'
                    key={idx}
                    onClick={() => alert(`You Clicked ${state.state_name}`)}
                >
                    {state.state_name}</div>
            })}
        </div>
    )
}

