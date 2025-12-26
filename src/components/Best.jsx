import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const Best = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Sidebar>
        <h1 className="text-2xl font-bold mb-4 font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif text-red-500">
          Best Sellers on Funky Fabrics{" "}
        </h1>

        {loading ? (
          <p className="flex m-auto justify-center text-4xl font-bold">
            Loading...
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.map((item) => (
              <div key={item.id} className="border p-4 rounded">
                <img
                  src={item.images}
                  alt={item.title}
                  className="h-40 mx-auto object-contain"
                />
                <h2 className="font-semibold mt-2">{item.title}</h2>
                <p className="line-through flex">${item.price}</p>
                <p className="text-red-500 font-bold">${item.price}</p>
              </div>
            ))}
          </div>
        )}
      </Sidebar>
    </div>
  );
};

export default Best;
