import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/Logo.jpg";
import Cart from "../assets/images/Cart.svg";
import Arrivals from "../assets/images/Arrivals.webp";
import Login from "../assets/images/Login.svg";
import usecartstore from "./Statemanagement";
export default function Navbar() {
  const { islogin, logout } = usecartstore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <nav className="border-b px-6 py-3 flex justify-between bg-blur text-black">
      <Link to="/">
        <img src={Logo} alt="Logo" className="w-32 cursor-pointer" />
      </Link>

      <NavigationMenu className="flex">
        <NavigationMenuList className="flex pr-20 gap-12 ">
          <NavigationMenuItem>
            <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
              Shop
            </NavigationMenuTrigger>

            <NavigationMenuContent className="border-0">
              <div className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] shadow-xl ">
                <NavigationMenuLink asChild>
                  <Link
                    to="/arrivals"
                    className="block rounded-md px-3 py-2 hover:bg-muted row-span-8"
                  >
                    <div className="relative w-[240px] overflow-hidden rounded-lg cursor-pointer group mt-7 hover:scale-95 ">
                      {
                        <img
                          src={Arrivals}
                          loading="lazy"
                          decoding="async"
                          width={240}
                          height={300}
                        />
                      }

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                      <div className="absolute bottom-0 p-4 text-white">
                        <h3 className="text-lg font-semibold">New Arrivals</h3>
                        <p className="text-sm text-white/90 leading-tight">
                          Discover the styles in our latest collection.
                        </p>
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    to="/bestsellers"
                    className="block rounded-md px-3 py-2 hover:bg-muted"
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4">
                      Best Sellers
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Get access to the best of the best sellers in our store
                    </p>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    to="/winter"
                    className="block rounded-md px-3 py-2 hover:bg-muted"
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4">
                      Winter Collection
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Get your winter more excited with our winter collection
                    </p>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    to="/clearence"
                    className="block rounded-md px-3 py-2 hover:bg-muted"
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4">
                      Clearance
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Grab the the items that are on sale and get them at the
                      most discounted price
                    </p>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
              Categories
            </NavigationMenuTrigger>

            <NavigationMenuContent className="border-0">
              <div className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] shadow-xl ">
                <NavigationMenuLink asChild>
                  <Link
                    to="/men"
                    className="block rounded-md px-3 py-2 hover:bg-muted row-span-8"
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4">Mens</div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Mens apparel, shoes and accessories for men
                    </p>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    to="/arrivals"
                    className="block rounded-md px-3 py-2 hover:bg-muted row-span-8"
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4">
                      Home & Accessories
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Home & Accessories for home and office
                    </p>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    to="/women"
                    className="block rounded-md px-3 py-2 hover:bg-muted"
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4">
                      Womens
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Womens apparel, shoes and accessories for women
                    </p>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    to="/kids"
                    className="block rounded-md px-3 py-2 hover:bg-muted"
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4">Kids</div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Kids apparel, shoes and accessories for kids
                    </p>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    to="/kids"
                    className="block rounded-md px-3 py-2 hover:bg-muted"
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4">Kids</div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Kids apparel, shoes and accessories for kids
                    </p>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    to="/arrivals"
                    className="block rounded-md px-3 py-2 hover:bg-muted row-span-8"
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4">
                      Electronics
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Electronics for home and office
                    </p>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Quick Links</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[280px]">
                <NavigationMenuLink asChild>
                  <Link
                    to="/allproducts"
                    className="block rounded-md px-3 py-2 hover:bg-muted"
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4">
                      All Products
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      You will be taken into all products page
                    </p>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    to="/faq"
                    className="block rounded-md px-3 py-2 hover:bg-muted"
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4">FAQ</div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Here yu finds the most asked questions and answers
                    </p>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    to="/findastore"
                    className="block rounded-md px-3 py-2 hover:bg-muted"
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4">
                      Find A Store
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Find a store near you and feel free to visit the store and try out our collection in person
                    </p>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger>Support</NavigationMenuTrigger>
            <NavigationMenuContent className="relative">
              <div className="grid w-[280px]">
                <NavigationMenuLink asChild>
                  <Link
                    to="/support"
                    className="block rounded-md px-3 py-2 hover:bg-muted"
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4">
                      Contact Us
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      You will be taken into contact us page where you can get
                      in touch with the support team
                    </p>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="relative">
            <NavigationMenuLink>
              <Link to="/shoppingcart">
                <p className="text-base font-semibold flex gap-1 items-center">
                  Cart
                  <img
                    src={Cart}
                    alt="Login"
                    decoding="async"
                    className="w-5 cursor-pointer"
                  />
                </p>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              {islogin ? (
                <div
                  onClick={handleLogout}
                  className="cursor-pointer"
                >
                  <p className="text-base font-semibold flex gap-1 items-center">
                    Logout
                    <img
                      src={Login}
                      alt="Logout"
                      decoding="async"
                      className="w-5 cursor-pointer"
                    />
                  </p>
                </div>
              ) : (
                <Link to="/login">
                  <p className="text-base font-semibold flex gap-1 items-center">
                    Login
                    <img
                      src={Login}
                      alt="Login"
                      decoding="async"
                      className="w-5 cursor-pointer"
                    />
                  </p>
                </Link>
              )}
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
