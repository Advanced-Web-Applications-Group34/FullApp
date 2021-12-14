import {BrowserRouter, Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Restaurants from './Components/Restaurants';
import SignInForm from "./Components/SignInForm";
import SignUpForm from "./Components/SignUpForm";
import UserSignupForm from "./Components/UserSignupForm";
import ResSignupForm from "./Components/ResSignupForm";
import AdminView from "./Components/RestaurantForms/AdminView";
// import Menu from "./Components/RestaurantForms/Menu";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import RestaurantProduct from "./Components/RestaurantProduct";
import Category from "./Components/Category";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        {/* NavBar */}
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="restaurants" element={<Restaurants/>} />
            <Route path="login" element={<SignInForm />} />
            <Route path="/login/SignUpForm" element={<SignUpForm/>} />
            <Route path="/login/SignUpForm/UserSignupForm" element={<UserSignupForm/>} />
            <Route path="/login/SignUpForm/ResSignupForm" element={<ResSignupForm/>} />
            <Route path="/login/SignUpForm/ResSignupForm/AdminView" element={<AdminView/>} />
            {/* <Route path="/login/SignUpForm/ResSignupForm/AdminView/Menu" element={<Menu/>} /> */}
            <Route path="/login/SignUpForm/ResSignupForm/AdminView/Menu/AdminMode" element={<AdminView />} />

          </Routes>

          <CartProvider>
            <Routes>
                <Route path="cart" element={<Cart />} />
                <Route path="/restaurant/:id" element={<RestaurantProduct />} />
                <Route path="/category/:id" element={<Category />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </CartProvider>

        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;
