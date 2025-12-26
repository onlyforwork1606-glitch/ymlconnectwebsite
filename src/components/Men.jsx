import React from 'react'
import { useEffect, useState } from 'react'
import Sidebar from './Sidebar'

const Men = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    
   
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch("https://onlyforwork1606-glitch.github.io/Fashiondata/Mens.json")
          if (!res.ok) throw new Error("Failed to fetch")
          const json = await res.json()
          setData(json)
        } catch (err) {
          setError(err.message)
        } finally {
          setLoading(false)
        }
      }
  
      fetchData()
    }, [])
  return (
    <div>
      <Sidebar>
      
      <h1 className="text-2xl font-bold mb-4 font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ">All Products </h1>

        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {data.filter(item => item.Gender === "Men").map((item) => (
            <div key={item.id} className="border p-4 rounded">
              <img
                src={item.url}
                alt={item.title}
                className="h-40 mx-auto object-contain"
              />
              <h2 className="font-semibold mt-2">{item.title}</h2>
              
              <p className="text-red-500 font-bold">${item.ProductId}</p>
            </div>
          ))}
        </div>
      </Sidebar>
    </div>
  )
}

export default Men