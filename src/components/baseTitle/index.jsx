import React from 'react'
import './index.css'



export default function index({ name, children }) {
    return (
        <div style={{ overflow: 'hidden' }} >
            <div className='title-body'>
                {children}
                <span className='title-name' >{name}</span>
            </div>
        </div>

    )
}
