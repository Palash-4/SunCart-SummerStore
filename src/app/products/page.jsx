import ProductCard from "@/components/ProductCard"

const AllProducts =async () => {
    const res=await fetch('https://sun-cart-summer-store.vercel.app/product.json')
    const data=await res.json()

    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-4 animate__animated animate__fadeInDown animate__slow '>Products</h1>
            <div className="grid grid-cols-4 gap-4">
                {data.map(data=> <ProductCard key={data.id } data={data}></ProductCard>)}
            </div>
        </div>
    );
};

export default AllProducts;