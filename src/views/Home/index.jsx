import React from 'react'
import Header from './Header'
import { Outlet } from "react-router-dom";
import './index.css'
export default function index() {
  return (
    <div className='my-content'>
      <Header></Header>
      <div className='card-body-box'>
        <Outlet />
      </div>
    </div>
  )
}
