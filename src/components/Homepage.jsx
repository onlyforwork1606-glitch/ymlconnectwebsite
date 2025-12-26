import React from "react";
import Women from "../assets/images/Womenwear.jpg";
import Winterwear from "../assets/images/Winterwear.jpg";
import Fashion from "../assets/images/Fashion.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import usecartstore from "./Statemanagement";
const Homepage = () => {
  const username = usecartstore((state) => state.username)
  console.log(username);
  const navigate = useNavigate();
  function handleArrivals() {
    navigate("/arrivals");
    
  }
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-6 py-20">
          <div className="flex flex-col justify-center">
            {username==""? (
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Upgrade Your Style <br /> With Confidence
            </h2>
            ) : (
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Hey! {username}
               <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Upgrade Your Style <br /> With Confidence
            </h2>
            </h2>
            
            )}

            <p className="mt-6 text-gray-600 max-w-md">
              Discover premium clothing crafted for comfort, style, and
              confidence. New arrivals every week.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800">
                Shop Now
              </button>

              <button className="px-6 py-3 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100" onClick={handleArrivals}>
                New Arrivals
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src={Fashion}
              alt="Fashion model"
              decoding="async"
              className="rounded-xl w-full h-[520px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-2xl font-bold mb-10">Shop by Category</h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Men",
              decoding:"async",
              img: "https://images.unsplash.com/photo-1516826957135-700dedea698c",
            },
            { title: "Women", decoding:"async", img: Women },
            { title: "Winter Wear", decoding:"async", img: Winterwear },
            {
              title: "Accessories",
              img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
            },
          ].map((cat) => (
            <div
              key={cat.title}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={cat.img}
                decoding="async"
                loading="lazy"
                alt={cat.title}
                className="h-[260px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40" />
              <span className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                {cat.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-10">Featured Collection</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
                  alt="Product"
                  decoding="async"  
                  loading="lazy"
                  className="h-[300px] w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="font-medium">Classic Hoodie</h4>
                  <p className="text-sm text-gray-600 mt-1">$49.99</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold">Style That Moves With You</h3>
          <p className="mt-4 text-gray-600">
            Join thousands of customers redefining fashion.
          </p>

          <button className="inline-block mt-8 px-8 py-3 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800">
            Start Shopping
          </button>
        </div>
      </section>

      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-gray-500 flex justify-between">
          <span>© 2025 StyleHub. All rights reserved.</span>
          <div className="flex gap-6">
            <span className="cursor-pointer">Privacy</span>
            <span className="cursor-pointer">Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
