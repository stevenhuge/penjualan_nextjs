type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
};

async function getProduct() {
    const res = await fetch("http://localhost:5000/items", {
        cache: "no-store",
    });
    return res.json();
}

const Items = async () => {
    const product: Product[] = await getProduct();
    return (
        <>
          <div style={{ height: '1rem', backgroundColor: '#EEEEEE' }}></div>
          
            <div style={{ backgroundColor: '#fff', height: 'auto', paddingLeft: '4rem', paddingRight: '4rem' }}>
            <p style={{ color: "#14B8A6", fontSize: "15px", border: '1px solid', width: '100%', borderRadius: '35px' }} className="px-3 py-2 text-center">
          Flight Ticket
        </p>
             <div className="flex overflow-x-scroll space-x-4 p-4">

        {product.map((product, index) =>
        <div className="flex-shrink-0 w-64 rounded-lg shadow-md" style={{ backgroundColor: '#EEEEEE' }}>
            <img src="tiketpesawat.jpeg" alt="Product 1" className="w-full h-32 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-gray-700 mt-2">{product.price}</p>
                <a href="#" className="mt-4 block bg-blue-500 text-white px-4 py-2 rounded-md text-center hover:bg-blue-600">Buy</a>
            </div>
        </div>)}

    </div>
            </div>
        </>
      
    )
}

export default Items