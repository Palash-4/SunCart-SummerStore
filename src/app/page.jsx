import ProductCard from "@/components/ProductCard"

const AllProducts =async () => {
    const res=await fetch('https://sun-cart-summer-store.vercel.app/product.json')
    const data=await res.json()
    console.log(data);
    
    return (
        <div>
            <h1 className='text-2xl font-bold my-4'>All Products</h1>
            <div className="grid grid-cols-4 gap-4">
                {data.map(data=> <ProductCard key={data.id } data={data}></ProductCard>)}
            </div>
        </div>
    );
};

export default AllProducts;