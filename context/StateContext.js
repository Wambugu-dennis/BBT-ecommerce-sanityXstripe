import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-hot-toast';
import product from "sanity-ecomm/schemas/product";


const Context = createContext();

export const StateContext = ({ children }) =>{
   const [ showCart, setShowCart] = useState(false);
   const [ cartItems, setCartItems] = useState([]);
   const [ totalprice, setTotalPrice] = useState(0);
   const [ totalQuantities, setTotalQuantities] = useState(0);
   const [ qty, setQty] = useState(1);

   let foundproduct;
   let index;

    const onAdd = (product, quantity) => {
        const checkProductIncart = cartItems.find((item) => item._id === product._id);
        
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

        if (checkProductIncart){
            

            const updatedCartItems = cartItems.map((cartproduct) => {
                if(cartproduct._id === product._id) return{
                    ...cartproduct,
                    quatity: cartproduct.quatity + quatity
                }
            })
            setCartItems(updatedCartItems);
        }else {
           product.quantity = quantity; 

           setCartItems([...cartItems, {...product}])
        }
        toast.success(`${qty} ${product.name} added to the cart.`);

    }
    
    const onRemove = (product) => {
        foundproduct = cartItems.find((item) => item._id === product._id);
        const newCartItems = cartItems.filter((item) => item._id !== product._id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundproduct.price * foundproduct.quantity);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundproduct.quantity)
        setCartItems(newCartItems)
    }


    const totalCartItemQuantity = (id, value) => {
        foundproduct = cartItems.find((item) => item._id === id);
        index = cartItems.findIndex((product) => product._id === id);
        const newCartItems = cartItems.filter((item) => item._id !== id)

        if(value === 'inc'){            
            setCartItems([...newCartItems, {...foundproduct, quantity: foundproduct.quantity + 1}])
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundproduct.price)
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
        }else if(value === 'dec'){
            if(foundproduct.quantity > 1)
            setCartItems([...newCartItems, {...foundproduct, quantity: foundproduct.quantity - 1}])
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundproduct.price)
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
        }
    }

   const incQty = () => {
    setQty((prevQty) => prevQty + 1 );
   }

   const decQty = () => {
    setQty((prevQty) => {
    if(prevQty - 1 < 1)  return 1; 
    return prevQty -1;
    });
   }

   return(
    <Context.Provider 
    value={{
        showCart,
        cartItems,
        totalprice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities
      }}
    >
        {children}
    </Context.Provider>
   )
}

export const useStateContext = () => useContext(Context);
