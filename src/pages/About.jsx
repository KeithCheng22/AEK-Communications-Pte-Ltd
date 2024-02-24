import React from 'react'
import about from '../assets/images/about.png'
import { Link } from 'react-router-dom'
import sound from '../assets/images/AEK Communications.mp3'
import soundIcon from '../assets/images/volume.png'

    
export default function About() {
    const audio = new Audio(sound)
    return(
        <main className='about restyle'>
            <img className='about--img' src={about} alt='AEK products comprising of CCTV, PABX, Door Access Systems.'/>
            <section className='about--section'>
                <h1 style={{margin:0}}>AEK Communications<button className='soundIconButton' onClick={() => audio.play()}><img className='soundIcon' src={soundIcon} alt='sound icon.'/></button></h1>
                <span>/eɪ ɛ k ˌkəˌmjuːnɪˈkeɪʃənz/</span>
                <p>Established in 2007, we excel through a dedicated team and commitment to excellence. We offer comprehensive Telecommunication Solutions, including <b>PABX</b>, <b>Door Access</b>, <b>CCTV</b>, <b>Auto Attendant</b>, and more. Our Slogan: <b><i>"Making Us Closer"</i></b> embodies our steadfast commitment to fostering enduring relationships and ensuring unparalleled client satisfaction. Count on us for reliable products and services to elevate your business.</p>
                <div className='about--explore'>
                    <h2 style={{margin: 0, fontSize: '1.2rem'}}>Your connection awaits, our team is ready.</h2>
                    <h2 style={{fontSize: '1.2rem'}}>Our advanced solutions are prepared to take your telecommunications experience to the next level.</h2>
                    <Link className='explore' to='/products'>Explore our products</Link>
                </div>
            </section>
        </main>
        
    );
}