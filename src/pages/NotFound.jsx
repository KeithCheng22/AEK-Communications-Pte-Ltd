import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <main className='notFound'>
            <h2>Uh-Oh...</h2>
            <p>The page you are looking for may have been removed, or probably never existed.</p>
            <h1 className='error'>404</h1>
            <Link style={{marginTop: '1rem'}} to=".." className='back'>Back to Home</Link>
        </main>
    )
}