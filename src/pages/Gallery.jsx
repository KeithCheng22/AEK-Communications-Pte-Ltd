import React, { useEffect }from "react";
import g1 from '../../public/g1.jpeg'
import g2 from '../../public/g2.jpeg'
import g3 from '../../public/g3.jpeg'
import g4 from '../../public/g4.jpeg'
import g5 from '../../public/g5.jpeg'
import g6 from '../../public/g6.jpeg'
import g7 from '../../public/g7.jpeg'
import g8 from '../../public/g8.jpeg'
import g9 from '../../public/g9.jpeg'
import g10 from '../../public/g10.jpeg'
import g11 from '../../public/g11.jpeg'
import g12 from '../../public/g12.jpeg'
import g13 from '../../public/g13.jpeg'
import g14 from '../../public/g14.jpeg'
import g15 from '../../public/g15.jpeg'

export default function Gallery() {

    useEffect(() => {
        const handleScroll = () => {
          const images = document.querySelectorAll('.fade-in-on-scroll');
          
          images.forEach((image) => {
            const bounding = image.getBoundingClientRect();
    
            if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
                image.classList.add('visible');
            } 
          });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Initial call to handle scroll in case images are already in the viewport
        handleScroll();
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return( 
        <main>
            <h2 className='gallery h2'>Check out our experts at work!</h2>
            <div className="photo-grid">

            <div className="photo-container fade-in-on-scroll">
                    <img className="photo p10" src={g10} alt="Photo 10" />
                    <div className="overlay">Crew members</div>
                </div>


                <div className="photo-container fade-in-on-scroll">
                    <img className="photo p2" src={g2} alt="Photo 2" />
                    <div className="overlay">CCTV DVR Set-Up</div>
                </div>

                <div className="photo-container fade-in-on-scroll">
                    <img className="photo p3" src={g3} alt="Photo 3" />
                    <div className="overlay">Door Access Set-Up</div>
                </div>

                <div className="photo-container fade-in-on-scroll">
                    <img className="photo p4" src={g4} alt="Photo 4" />
                    <div className="overlay">Outdoor CCTV Set-Up</div>
                </div>

                <div className="photo-container fade-in-on-scroll">
                    <img className="photo p5" src={g5} alt="Photo 5" />
                    <div className="overlay">Water-proof Door Access System</div>
                </div>

                <div className="photo-container fade-in-on-scroll">
                    <img className="photo p6" src={g6} alt="Photo 6" />
                    <div className="overlay">PABX Stocks</div>
                </div>


                <div className="photo-container fade-in-on-scroll">
                    <img className="photo p7" src={g7} alt="Photo 7" />
                    <div className="overlay">PABX Programming</div>
                </div>

                <div className="photo-container fade-in-on-scroll">
                    <img className="photo p8" src={g8} alt="Photo 8" />
                    <div className="overlay">PABX Systems</div>
                </div>

                <div className="photo-container fade-in-on-scroll">
                    <img className="photo p11" src={g11} alt="Photo 11" />
                    <div className="overlay">Crew Members @ Work</div>
                </div>

                <div className="photo-container fade-in-on-scroll">
                    <img className="photo p12" src={g12} alt="Photo 12" />
                    <div className="overlay">Wiring Installation</div>
                </div>

                <div className="photo-container fade-in-on-scroll">
                    <img className="photo p9" src={g9} alt="Photo 9" />
                    <div className="overlay">Office Door Access System</div>
                </div>
                
                <div className="photo-container fade-in-on-scroll">
                    <img className="photo p1" src={g1} alt="Photo 1" />
                    <div className="overlay">Indoor CCTV</div>
                </div>

                <div className="photo-container fade-in-on-scroll">
                    <img className="photo p13" src={g13} alt="Photo 13" />
                    <div className="overlay">Fingerprint Door Access System</div>
                </div>

                <div className="photo-container fade-in-on-scroll">
                    <img className="photo p14" src={g14} alt="Photo 14" />
                    <div className="overlay">16/32 Channel CCTV DVR</div>
                </div>

                <div className="photo-container fade-in-on-scroll">
                    <img className="photo p15" src={g15} alt="Photo 15" />
                    <div className="overlay">Wiring Works</div>
                </div>
            </div>
        </main>
    )
}