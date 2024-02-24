import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const date = new Date()
const currentYear = date.getFullYear()

export default function Footer() {
    return(
        <footer>
            <span className='copyright'>&#169; {currentYear} AEK Communications Pte. Ltd. </span>
            <br />
            <span className='footer--set'>
                <Link to='terms&conditions' className='footer--li'>Terms & Conditions</Link>
                <span className='footer--li' style={{color: 'grey'}}>|</span>
                <Link to='privacypolicy' className='footer--li'>Privacy Policy</Link>
            </span>
        </footer>
    )
}