import React from 'react'
import './index.css'

export default function Index({ onClick, children }) {
    return (
        <button className='base-btn' onClick={onClick}>{children}</button>
    )   
}
