import { createContext, useState, useEffect } from "react";
import { products, carousel } from "../data/EcomData";
import useAlert from "../hooks/useAlert";

const EcomContext = createContext();

export const EcomProvider = ({ children }) => {

  // Use states
  const [product, setProduct] = useState([]);
  const [cartitems, SetCartItems] = useState([]);
  const [slide, setSlide] = useState([]);
  const {showAndHide, alertInfo} = useAlert()

//Use effect
  useEffect(() => {
    fetchProducts();
    fetchCarousel();
    fetchCart()
  }, []);

  //filtered Cars
  const featured = product.filter((item) => item.featured === true);
  const topSelling = product.filter((item) => item.topSelling === true);

  //Api fetchs
  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3000/api/product");
    const data = await response.json();
    setProduct(data);
  };
  const fetchCarousel = async () => {
    const response = await fetch("http://localhost:3000/carousel");
    const data = await response.json();
    setSlide(data);
  };

  //Cart Functions
  // const addToCart = (prod) => {
  //   const existingItemIndex = cartitems.findIndex(
  //     (item) => item.id === prod.id
  //   );
  //   if (existingItemIndex !== -1) {
  //     const updatedCartItem = [...cartitems];
  //     const itemToUpdate = updatedCartItem[existingItemIndex];
  //     itemToUpdate.quantity += prod.quantity;
  //     itemToUpdate.amount = itemToUpdate.quantity * itemToUpdate.price;
  //     showAndHide("error", "Item Already Exist In Cart");
  //   } else {
  //     SetCartItems([
  //       ...cartitems,
  //       { ...prod, amount: prod.price * prod.quantity }
  //     ]);
  //     showAndHide("success", "Item Added To Cart");
  //   }
  // };
  const addToCart = async (productId) => {
    try {
     const res = await Fetch("http://localhost:3000/addToCart", {
         method: "POST",
         headers: {
             "Content-Type": "application/json",
             "auth-token": `${localStorage.getItem("auth-token")}`,
         },
         body: JSON.stringify({productId, quantity: 1 }),
     });

     if (!res.ok) {
         throw new Error ("Something went wrong");
     }

     const data = await res.json();
     console.log(data);
     showAndHide("success", "item added to cart");
    } catch (error) {
     console.log(error.message);
     showAndHide("error", "Failed to add item to cart");
    }
 };
 const getCartCount = () => {
  if(!cartitems || cartitems.products){
    return 0
  }
  else{
    return cartitems.products?.reduce((total, item)=> total + item.quantity, 0)
  }
 }
 const fetchCart = async () => {
  try {
    const res = await fetch("http://localhost:3000/cart", {
      method: "GET",
      headers:{
        "Content-Type": "application/json",
        "auth-token": `${localStorage.getItem("auth-token")}`
      },
    })
    if(!res.ok){
      throw new Error("Something went wrong")
    }
    const data = await res.json();
    SetCartItems(data)
  } catch (error) {
    console.error("Error getting cart", error)
  }
 }

  const updateQuantity = (id, newQuantity) =>{
    const existingItemIndex = cartitems.findIndex((item)=> item.id = id);
    const updatedCartItem = [...cartitems];
    const itemToUpdate = updatedCartItem[existingItemIndex];
    itemToUpdate.quantity = newQuantity;
    itemToUpdate.amount = itemToUpdate.price * itemToUpdate.quantity;
    SetCartItems(updatedCartItem)
  }
  const deleteItem = (id) => {
    SetCartItems(cartitems.filter((item) => item.id !== id))
    showAndHide("error", "Deleted Item From Cart");
  }

  const totalAmount = () => {
    return cartitems.products?.reduce((total, item)=> total + item.amount, 0);
  }
  return (
    <EcomContext.Provider
      value={{ slide, product, featured, topSelling, addToCart, cartitems, updateQuantity, deleteItem, totalAmount, showAndHide, alertInfo, getCartCount}}
    >
      {children}
    </EcomContext.Provider>
  );
};
export default EcomContext;
