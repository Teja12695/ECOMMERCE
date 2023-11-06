import Navbar from "./Navbar";
import Data from "./Data"
import Card from "./Card"
import { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Carousel from "./Carousel";
import Cart from "./Cart"


function App() {

  let [item,updateproduct] = useState([])

   function addingCart(product){
    console.log(product)
    updateproduct((cartdata)=>[...cartdata,{item:product,quantity:1}])
  }
  return (
    <BrowserRouter>
    <Navbar/>
    <Carousel/>
      <Routes>
        <Route exact path ="/" element={<Card Data={Data} addingCart={addingCart}/>}/>
        <Route exact path ="/Cart" element={<Cart item={item}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
