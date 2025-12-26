import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const usecartstore = create(
  persist(
    (set) => ({
      Cartitems: [],
      quantity: 1,
      size: "M",
      user: null,
      username: "",
      setUsername: (username) => set({ username }),
      islogin:false,
      setIslogin: (islogin) => set({ islogin }),
      setUser: (user) => set({ user }),
      setQuantity: (quantity) => set({ quantity }),
      setSize: (size) => set({ size }),
      setCartitems: (Cartitems) => set({ Cartitems }),
      logout: () => set({ islogin: false, user: null, username: "" }),
    }),
    { 
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default usecartstore;
