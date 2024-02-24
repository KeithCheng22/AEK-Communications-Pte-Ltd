import React, { useEffect} from 'react'
import data from '../db'
import { useParams, Link, useLocation } from 'react-router-dom'


export default function ProductDetail() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    const productId = useParams().id
    const {category, subCategory, productName, img, productCode, description, features} = data.filter(product => product.id == productId)[0]
    const prevState = useLocation().state?.type
    
    let status; 
    if (prevState) {
        if (prevState.split('=')[1].split('+').length < 2) {
            status = prevState.split('=')[1].split('+')[0].toUpperCase()
        }
        else {
            status = `${prevState.split('=')[1].split('+')[0].toUpperCase()} ${prevState.split('=')[1].split('+')[1].toUpperCase()}`
        }
    }
    

    return(
        <div className='product-section'>
            <Link to={`/products?${prevState}`} relative='path' className='back-detail'><span>Back to {prevState ? status : 'all'} products</span></Link>
            <section className='shrinkDetail product-detail'>
                <img src={img} className='product-img'/>
                <main className='product-container'>
                    <h2>{productName}</h2>
                    <h3>{productCode}</h3>
                    <p className='desc'><i>{description}</i></p>
                    <b><p className='features'>Features: </p></b>
                    <ul>
                        {features.map(feature => <li>{feature}</li>)}
                    </ul>
                    {(productName === 'P-Series PBX System' || productName === 'S-Series PBX System') && <small>*Note: Different systems have different capabilites, the aforementioned range takes into account all systems.</small>}
                    {(productName === 'P-Series PBX System' || productName === 'S-Series PBX System') && <section>
                        <b><p>Compatible Phone Systems: </p></b>
                        <li>Fanvil X300 Series: <Link className='compatible' to='/products/9'>X301G</Link>, <Link className='compatible' to='/products/10'>X303G</Link>, <Link className='compatible' to='/products/11'>X301W</Link></li>
                        <li>Fanvil XU Series: <Link className='compatible' to='/products/12'>X4U</Link>, <Link className='compatible' to='/products/13'>X6U</Link>, <Link className='compatible' to='/products/14'>X210</Link>, <Link className='compatible' to='/products/15'>X7A</Link>, <Link className='compatible' to='/products/16'>X7A/CM60</Link>, <Link className='compatible' to='/products/17'>W611W</Link></li>
                    </section>
                    }
                    <p className='contactus'>For more queries on product information and installation. <Link className='interested' to='/contact_us'>Contact Us</Link></p>
                </main>
            </section>
            
        </div>
    )
}