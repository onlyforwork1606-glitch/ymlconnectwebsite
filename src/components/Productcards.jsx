import Productdata from "./Productdata"
import usecartstore from "./Statemanagement"
import { toast } from "sonner"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function ProductCard({ product }) {
  const [isAdded, setIsAdded] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [Size, setSize] = useState("M")

  const { Cartitems, setCartitems } = usecartstore()

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  function handleAddToCart() {
    setQuantity(1)
    setIsAdded(!isAdded)
  }

  function handleSizeChange(size) {
    setSize(size)
  }

  function handlesucessmessage() {
    toast.promise(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ name: product.name }), 2000)
        ),
      {
        loading: "Adding...",
        success: (data) => `${data.name} has been added to cart`,
        error: "Error",
      }
    )

    const existingItem = Cartitems.find(
      (item) => item.id === product.id && item.size === Size
    );

    if (existingItem) {
      setCartitems(
        Cartitems.map((item) =>
          item.id === product.id && item.size === Size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCartitems([...Cartitems, { ...product, quantity, size: Size }]);
    }
  }

  return (
    <Card className="w-64 border shadow-md rounded-lg overflow-hidden">
      <CardContent className="p-0">
        <Carousel
          plugins={[plugin.current]}
          className="w-full relative group"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {product.image.map((img, index) => (
              <CarouselItem key={index}>
                <div className="p-0">
                  <div className="flex aspect-square items-center justify-center relative">
                    <img
                      className="w-full h-full object-cover"
                      src={img}
                      decoding="async"
                      alt={`${product.name} view ${index + 1}`}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden group-hover:block">
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </div>
        </Carousel>

        <div className="p-3 space-y-2">
          <div className="space-y-1">
            <h3 className="text-sm font-semibold leading-none tracking-tight">
              {product.name}
            </h3>
            <p className="text-sm font-semibold text-muted-foreground">
              ₹{product.price}
            </p>
          </div>

          <div>
            {isAdded && quantity > 0 ? (
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <button
                    className="flex justify-center text-sm border p-1.5 bg-gray-100 text-black w-24 items-center rounded-lg hover:bg-gray-200 transition-colors"
                    onClick={handlesucessmessage}
                  >
                    Checkout
                  </button>

                  <div className="flex items-center border rounded-lg h-8">
                    <button
                      className="w-6 h-full text-xl flex items-center justify-center hover:bg-gray-100 rounded-l-lg"
                      onClick={() => setQuantity(Math.max(0, quantity - 1))}
                    >
                      -
                    </button>
                    <p className="w-6 text-center text-sm">{quantity}</p>
                    <button
                      className="w-6 h-full text-xl flex items-center justify-center hover:bg-gray-100 rounded-r-lg"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>  
                <div className="Sizes">
                  <div className="flex gap-2 items-center flex-wrap mt-2 w-full">
                    {["S", "M", "L", "XL", "XXL", "3XL", "4XL"].map((item) => (
                      <button
                        key={item}
                        onClick={() => handleSizeChange(item)}
                        className={`border-2 p-1 w-9 rounded-lg transition
                          ${
                            Size === item
                              ? "border-black bg-black text-white"
                              : "border-gray-300 bg-white text-black"
                          }
                          active:bg-gray-200`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <button
                className="flex justify-center text-sm border p-1.5 bg-gray-100 text-black w-full items-center rounded-lg hover:bg-gray-200 transition-colors"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ProductCards() {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {Productdata.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
