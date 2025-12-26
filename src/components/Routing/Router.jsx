import { createBrowserRouter  } from "react-router-dom"
import React , { Suspense} from "react"

const Homepage = React.lazy(() => import ("../Homepage"))
const Cart = React.lazy(() => import ("../Cart"))
const About = React.lazy(() => import ("../About"))
const Contact = React.lazy(() => import ("../Contact"))
const Layout = React.lazy(() => import ("../Layout"))
const Arrivals = React.lazy(() => import ("../Arrivals"))
const Best = React.lazy(() => import ("../Best"))
const Winter = React.lazy(() => import ("../Winter"))
const Allproducts = React.lazy(() => import ("../Quicklinks/Allprod"))
const FAQ = React.lazy(() => import ("../Quicklinks/FAQ"))
const Findastore = React.lazy(() => import ("../Quicklinks/Findastore"))
const Login = React.lazy(() => import ("../Login"))
const Clearencesale = React.lazy(() => import ("../Clearencesale"))  
const Shoppingcart = React.lazy(() => import ("../Shoppingcart"))
const Men = React.lazy(() => import ("../Men"))
const Signup = React.lazy(() => import ("../Signup"))
const Women = React.lazy(() => import ("../Women"))
const Kids = React.lazy(() => import ("../Kids"))
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/categories", element: <Cart /> },
      { path: "/quicklinks", element: <About /> },
      { path: "/support", element: <Contact /> },
      { path: "/arrivals", element: <Arrivals /> },
      { path: "/bestsellers", element: <Best /> },
      { path: "/winter", element: <Winter /> },
      { path: "/clearence", element: <Clearencesale/> },
      { path: "/allproducts", element: <Allproducts /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/findastore", element: <Findastore /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/shoppingcart", element: <Shoppingcart /> },
      { path: "/men", element: <Men /> },
      { path: "/women", element: <Women /> },
      { path: "/kids", element: <Kids /> },
    ],
  },
])

export default router
