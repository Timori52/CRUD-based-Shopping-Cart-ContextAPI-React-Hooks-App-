import {createContext, useReducer, useContext} from 'react'
import { cartReducer, productReducer } from "./Reducers";

import { faker } from '@faker-js/faker';
export const Cart = createContext();
faker.seed(99);
// let randomize;
const Context = ({children}) => {
const products = [...Array(20)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.department(),
  price: faker.commerce.price(),
  image: `${faker.image.image()}?random=${Math.random() * 100}`,
  inStock: faker.random.numeric([0, 3, 5, 6, 7]),
  fastDelivery: faker.datatype.boolean(),
  ratings: faker.random.numeric([1, 2, 3, 4, 5]),

}));
  

      // console.log(products);

      const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
      });

      const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
      });
    
      // console.log(productState);
  return (
    <Cart.Provider value={{state, dispatch, productState, productDispatch ,products}}> 
    {children}
    </Cart.Provider> 
  )
}

export const CartState = () => {
  return useContext(Cart);
};

export default Context;