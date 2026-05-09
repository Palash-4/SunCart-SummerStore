import React from 'react';
import ProductCard from './ProductCard';

const Popular = async () => {
    const res=await fetch('https://sun-cart-summer-store.vercel.app/product.json')
    const data=await res.json()
    const topProduct=data.slice(3,6)
    console.log(topProduct);

    //Hello
    return (
        <div>
            <h1 className='text-2xl font-bold my-5'>Popular Products</h1>
            

            <div className='grid grid-cols-3 gap-4'>
                {topProduct.map(data=> <ProductCard key={data.id} data={data}></ProductCard>)} 
                </div>
        </div>
    );
};

export default Popular;