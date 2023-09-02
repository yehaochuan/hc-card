import React from 'react'
import './index.css'



export default function index({ name, children }) {
    return (
        <div style={{ overflow: 'hidden' }} >
            <div className='title-body'>
                {children}
                <pre className='title-name' >{name}</pre>
            </div>
        </div>

    )
}
