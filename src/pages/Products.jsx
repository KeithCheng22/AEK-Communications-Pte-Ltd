import React, { useState, useEffect } from 'react'
import { Link, NavLink, useSearchParams, Outlet } from 'react-router-dom'
// DB Import 
import data from '../db'


function Product({details: {id, category, subCategory, productName, img}, type}) {

    return(
        <Link to={`${id}`} className='product-link' state={{type: type}}>
            <div className='shrink product'>
                <img className='product-img' src={img} />
                <section className='product-details'>
                    <h2>{productName}</h2>
                    <span className='product-cat'>{category}</span>
                    {subCategory && <p><b>Type:</b> {subCategory}</p>}
                </section>
            </div>
        </Link>
    )
}

export default function Products() {
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get('type')

    const [productData, setProductData] = useState(data)

    const dislayedProducts = typeFilter ? productData.filter(product => product.category.toLowerCase() === typeFilter) : productData

    const products = dislayedProducts.map(product => <Product type={searchParams.toString()} key={product.id} details={product}/>)
    
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return(
        <>
            <h1 className='product-h2' >Explore our product options</h1>
            <section className='change'>
                <NavLink to='?type=cctv' className={`product-filter ${typeFilter === 'cctv' ? typeFilter : ''}`}>CCTV</NavLink>
                <NavLink to='?type=door access' className={`product-filter ${typeFilter === 'door access' ? typeFilter : ''}`}>Door Access</NavLink>
                <NavLink to='?type=pabx' className={`product-filter ${typeFilter === 'pabx' ? typeFilter : ''}`}>PABX</NavLink>
                {typeFilter && <NavLink to='.' className='clearFilter'>Clear filter</NavLink>}
            </section>
            <main className='products'>
                <div className='product-div'>{products}</div>
            </main>
        </>
    )
}