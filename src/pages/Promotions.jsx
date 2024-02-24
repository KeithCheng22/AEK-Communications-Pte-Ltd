import React from "react";
import page1 from '../../public/page1.jpeg'
import page2 from '../../public/page2.jpeg'

export default function Promotions() {
    return (
        <>
            <h2 className="promos h2">Check out our promotions!</h2>
            <main className="promo">
                <img className='flyer' src={page1}/>
                <img className='flyer' src={page2}/>
            </main>
        </>
    )
}