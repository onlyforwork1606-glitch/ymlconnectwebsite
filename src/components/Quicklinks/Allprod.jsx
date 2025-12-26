import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { useFilters } from "../../context/FilterContext";

const ProductList = ({ data }) => {
  const { filters, priceRange } = useFilters();

  const filteredData = data.filter((item) => {
    if (
      filters.searchQuery &&
      !item.ProductTitle.toLowerCase().includes(
        filters.searchQuery.toLowerCase()
      )
    ) {
      return false;
    }

    if (
      filters.productType.length > 0 &&
      !filters.productType.includes(item.SubCategory)
    ) {
      return false;
    }
    if (filters.gender.length > 0 && !filters.gender.includes(item.Gender)) {
      return false;
    }

    if (filters.colors.length > 0 && !filters.colors.includes(item.Colour)) {
      return false;
    }

    if (filters.brands.length > 0) {
      const brandMatch = filters.brands.some((brand) =>
        item.ProductTitle.toLowerCase().includes(brand.toLowerCase())
      );
      if (!brandMatch) return false;
    }

    const price = item.ProductId;
    if (price < priceRange[0] || price > priceRange[1]) {
      return false;
    }

    return true;
  });

  if (filteredData.length === 0) {
    return (
      <div className="p-4 text-gray-500">No products match your filters.</div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {filteredData.map((item) => (
        <div key={item.ProductId} className="border p-4 rounded">
          <img
            src={item.ImageURL}
            alt={item.ProductTitle}
            className="h-40 mx-auto object-contain"
          />
          <h2 className="font-semibold mt-2">{item.ProductTitle}</h2>

          <p className="text-red-500 font-bold">${item.ProductId}</p>
        </div>
      ))}
    </div>
  );
};

const Allprod = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://onlyforwork1606-glitch.github.io/Fashiondata/data.json"
        );
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
        <h1 className="text-2xl font-bold mb-4 font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ">
          All Products{" "}
        </h1>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && <ProductList data={data} />}
      </Sidebar>
    </div>
  );
};

export default Allprod;
