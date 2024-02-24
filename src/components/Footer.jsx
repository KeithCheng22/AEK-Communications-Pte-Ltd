import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const date = new Date()
const currentYear = date.getFullYear()

export default function Footer() {
    return(
        <footer>
            <small className='copyright'>&#169; {currentYear} AEK Communications Pte. Ltd. </small>
            <span className='footer--set'>
                <Link to='terms&conditions' className='footer--li'>Terms & Conditions</Link>
                <span style={{color: 'grey'}}>|</span>
                <Link to='privacypolicy' className='footer--li'>Privacy Policy</Link>
            </span>
        </footer>
    )
}