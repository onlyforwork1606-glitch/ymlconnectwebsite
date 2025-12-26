import React from "react";
import usecartstore from "./Statemanagement";
import Delete from "../assets/images/Bin.svg";
import Payment from "../assets/images/paymentlogos.png";
import { Link } from "react-router-dom";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Shoppingcart = () => {
  const { Cartitems, setCartitems } = usecartstore();

  function handleQuantityChange(itemToUpdate) {
    setCartitems(
      Cartitems.map((item) =>
        item.id === itemToUpdate.id && item.size === itemToUpdate.size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function handleRemoveItem(itemToRemove) {
    setCartitems(
      Cartitems.filter(
        (item) =>
          !(item.id === itemToRemove.id && item.size === itemToRemove.size)
      )
    );
  }

  const totalOrderValue = Cartitems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1 className="font-bartle font-bold text-5xl tracking-[1px] ml-4">
        SHOPPING Cart updated 
      </h1>

      <div className="flex mt-5 justify-between gap-5">
        <div>
          {Cartitems.length === 0 ? (
            <div className="itemsbox border-black w-auto max-w-250 h-auto min-h-85">
              <h1 className="text-lg font-semibold p-5">
                Your shopping bag is empty.
              </h1>
              <p className="ml-5 text-md">
                Sign in to save or access saved items in your shopping bag.
              </p>
            </div>
          ) : (
            Cartitems.map((item, index) => (
              <div
                key={`${item.id}-${item.size}-${index}`}
                className="flex gap-10 ml-10 w-180 p-3"
              >
                <div className="flex gap-4 border-b border-gray-200 py-6">
                  <div className="w-38 flex-shrink-0">
                    <img
                      src={item.image[0]}
                      alt="product"
                      className="h-50 object-cover"
                    />
                  </div>

                  <div className="flex flex-1 justify-between">
                    <div className="space-y-1">
                      <p className="text-xs">Funcky Fabrics</p>
                      <p className="text-sm uppercase font-semibold tracking-wide">
                        {item.name}
                      </p>

                      <p className="text-md font-bold">Rs. {item.price}</p>

                      <div className="space-y-0.5 text-sm text-gray-600">
                        <p>Art no.: {item.id}</p>
                        <p>Colour: {item.color}</p>
                        <p>Size: {item.size}</p>
                        <p>Quantity: {item.quantity}</p>
                      </div>

                      <p className="pt-1 text-sm font-semibold">
                        Total: Rs. {item.price * item.quantity}
                      </p>

                      <div className="mt-3 inline-flex items-center border border-gray-300">
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <button className="px-3 py-2 hover:bg-gray-100">
                              <img
                                src={Delete}
                                alt="delete"
                                className="h-8"
                              />
                            </button>
                          </AlertDialogTrigger>

                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Remove this item?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                This item will be removed from your shopping
                                bag.
                              </AlertDialogDescription>
                            </AlertDialogHeader>

                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleRemoveItem(item)}
                              className="hover:scale-95">
                                Remove
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>

                        <span className="px-4 text-sm">
                          {item.quantity}
                        </span>

                        <button
                          className="flex justify-center items-center w-10 h-10 hover:bg-gray-100"
                          onClick={() => handleQuantityChange(item)}
                        >
                          <p className="text-3xl pb-2">+</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="paymentbox border-black w-auto min-w-130 h-auto min-h-80">
          <div className="flex justify-between">
            <h1>Discounts</h1>
            <a className="underline text-sm">ADD</a>
          </div>

          {Cartitems.length !== 0 && (
            <>
              <div className="flex justify-between mt-8">
                <p>Order value</p>
                <p>
                  Rs.
                  {totalOrderValue}
                </p>
              </div>

              <div className="flex justify-between mt-1">
                <p>Estimated delivery fee</p>
                {totalOrderValue > 1500 ? (
                  <p className="font-bold text-lg">Free</p>
                ) : (
                  <p className="font-bold text-lg">Rs. 50</p>
                )}
              </div>
            </>
          )}

          <h1 className="text-md pt-5 mb-5">TOTAL</h1>

          <button className="flex items-center justify-center bg-gray-200 w-full p-4">
            CONTINUE TO CHECKOUT
          </button>

          <Link
            className="flex border border-black items-center justify-center w-full p-4 mt-5"
            to="/login"
          >
            SIGN IN
          </Link>

          <p className="text-md mt-5">
            Shop now, pay in 30 days. For H&M members only.
          </p>

          <a className="underline text-sm">Learn More</a>

          <div className="paymentpartners flex justify-center">
            <img className="h-30" src={Payment} alt="" />
          </div>

          <p className="text-sm mt-10">
            The estimated tax will be confirmed once you added your shipping
            address in checkout.
          </p>

          <p className="text-sm mt-3">
            30-day returns. Read more about our return and refund policy.
          </p>

          <p className="text-sm mt-3">
            Need help? Please contact Customer Support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shoppingcart;
