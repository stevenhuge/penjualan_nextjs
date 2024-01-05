export const metadata = {
  title: "Dashboard",
};

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
};


async function getProduct() {
  const res = await fetch("http://localhost:5000/product", {
    cache: "no-store",
  });
  return res.json();
}


const Card = async () => {
  const product: Product[] = await getProduct();

  return (
    <>
    <div style={{ height: '1rem', backgroundColor: '#EEEEEE' }}>
        
    </div>
     <div style={main}>
      <div style={{ height: "auto" }} className="py-10 px-10">
        <p style={{ color: "#14B8A6", fontSize: "15px", border: '1px solid', width: '100%', borderRadius: '35px' }} className="px-3 py-2 text-center">
          Favorite Events 
        </p>
        <div className="flex flex-wrap justify-center mt-5">
          {product.map((product, index) => 
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg m-4"
            style={{ backgroundColor: "#EEEEEE" }}
          >
            <img
              className="w-full h-48 object-cover"
              src="/concert.jpg"
              alt="Gambar Produk 1"
            />
            <div className="px-6 py-4">
              <div className="text-xl mb-2">{product.title}</div>
              <p className="text-gray-700 text-base line-clamp-1" style={{ fontSize: '15px' }}>
                {product.description}
            </p>

            </div>
            <div className="px-6 py-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {product.price}
              </button>
            </div>
          </div>
          )}
</div>

      </div>
    </div>
    </>
   
  );
};

export default Card;

const main = {
  backgroundColor: "#fff",
  height: "auto",
};


