import React from 'react'
// import { Route,Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Nevigation = () => {
  return (
    <div className='head'>
        <div>
        <Link to='/'className='left'>Kalvium</Link>
        </div>
        <div >
        <Link to='/About' className='right'>About</Link>
        <Link to='/Contact' className='right'>Contact</Link>
        </div>
    </div>
  )
}

export default Nevigation