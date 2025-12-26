import { useEffect, useState } from "react";
import Clearence from "./Clearence";

const Arrivals = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [isAdded,setisAdded]=useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  const increase = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

function handleAdd(){
setisAdded(!isAdded)
}
  

  return (
    <div>
      <Clearence>
        <h1 className="text-2xl font-bold mb-4 text-red-500">Christmas Sale is livegit </h1>

        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((item) => (
            <div key={item.id} className="border p-4 rounded">
              <img
                src={item.image}
                alt={item.title}
                className="h-40 mx-auto object-contain"
              />

              <h2 className="font-semibold mt-2">{item.title}</h2>

              <p className="line-through">${item.price}</p>
              <p className="text-red-500 font-bold">${item.price}</p>
                {isAdded? <div> 
                <button className="border-2 w-fit p-2 rounded-xl "onClick={handleAdd}>Add to Cart </button>
                </div>:<p className="flex items-center gap-5 border-2 w-fit p-2 rounded-xl mt-2 ">
                <button className="text-2xl" onClick={() => decrease(item.id)}>-</button>
                <p className="">{quantities[item.id] || 0}</p>
                <button className="text-2xl" onClick={() => increase(item.id)}>+</button>
              </p>} 
              
            </div>
          ))}
        </div>
      </Clearence>
    </div>
  );
};

export default Arrivals;
