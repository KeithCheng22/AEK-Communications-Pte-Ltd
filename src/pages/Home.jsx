import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return(
        <main className='home'>
            <section className='changeLayout home-slogan'>
                <h1>&ldquo;Making Us Closer&rdquo; </h1>
                <p>Unlock Your Business Potential with Our Trusted Telecommunication Solutions – Tailored for SMEs to MNCs, Across Industries.</p>
                <Link style={{marginTop: '1.6rem'}} to='products' className='to-products'>Browse our products</Link>
            </section>      
        </main>
    )
}