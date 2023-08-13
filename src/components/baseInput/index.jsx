import React, { useRef } from 'react'
import './index.css'

export default function Index({ children, placeholder, onChange }) {
    let inputRef = useRef(null)



    return (
        <div className="base-input-box">
            <span> {children}</span>
            <input className="base-input-body" onChange={() => { onChange(inputRef.current.value) }} placeholder={placeholder} ref={inputRef} />
        </div>


    )
}
