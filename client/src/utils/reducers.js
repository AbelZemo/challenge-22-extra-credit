// import { useReducer } from 'react';
// import {
//   UPDATE_PRODUCTS,
//   ADD_TO_CART,
//   UPDATE_CART_QUANTITY,
//   REMOVE_FROM_CART,
//   ADD_MULTIPLE_TO_CART,
//   UPDATE_CATEGORIES,
//   UPDATE_CURRENT_CATEGORY,
//   CLEAR_CART,
//   TOGGLE_CART,
// } from './actions';

// // TODO: To get a better understand of how a reducer works - add comments to the various actions in the reducer
// export const reducer = (state, action) => {
//   switch (action.type) {
//     // TODO: Add a comment describing the functionality of the UPDATE_PRODUCTS case
//     // Your comment here
//     case UPDATE_PRODUCTS:
//       return {
//         ...state,
//         products: [...action.products],
//       };

//     case ADD_TO_CART:
//       return {
//         ...state,
//         cartOpen: true,
//         cart: [...state.cart, action.product],
//       };

//     case ADD_MULTIPLE_TO_CART:
//       return {
//         ...state,
//         cart: [...state.cart, ...action.products],
//       };
//     // TODO: Add a comment describing the functionality of the UPDATE_CART_QUANTITY case
//     // Your comment here
//     case UPDATE_CART_QUANTITY:
//       return {
//         ...state,
//         cartOpen: true,
//         cart: state.cart.map((product) => {
//           if (action._id === product._id) {
//             product.purchaseQuantity = action.purchaseQuantity;
//           }
//           return product;
//         }),
//       };

//     // TODO: Add a comment describing the functionality of the REMOVE_FROM_CART case
//     // Your comment here
//     case REMOVE_FROM_CART:
//       let newState = state.cart.filter((product) => {
//         return product._id !== action._id;
//       });

//       return {
//         ...state,
//         cartOpen: newState.length > 0,
//         cart: newState,
//       };

//     case CLEAR_CART:
//       return {
//         ...state,
//         cartOpen: false,
//         cart: [],
//       };

//     case TOGGLE_CART:
//       return {
//         ...state,
//         cartOpen: !state.cartOpen,
//       };

//     case UPDATE_CATEGORIES:
//       return {
//         ...state,
//         categories: [...action.categories],
//       };

//     case UPDATE_CURRENT_CATEGORY:
//       return {
//         ...state,
//         currentCategory: action.currentCategory,
//       };

//     // TODO: Add a comment describing what the default case is for
//     // Your comment here
//     default:
//       return state;
//   }
// };

// export function useProductReducer(initialState) {
//   return useReducer(reducer, initialState);
// }
import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART,
} from './actions';

const initialState = {
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: '',
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // TODO: Add a comment describing the functionality of the UPDATE_PRODUCTS case
    // If the reducer action type is UPDATE_PRODUCTS it will update the products from the array of products in iterable way.
    // I mean if we add one product into the products array the old products array becomes the updated data(old products array plus the new product).
    // the same logic is true if we delete one product from the products array, the old products array will have the new updated data. just without the deleted one! 
    case UPDATE_PRODUCTS:
      return {
        // Copy the whole state

        ...state,
        products: [...action.products],
      };

    // If the reducer action type is ADD_TO_CART it will add one product item into the cart.

    case ADD_TO_CART:
      return {
        // Copy the whole state

        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    // If the reducer action type is ADD_MULTIPLE_TO_CART it will add multiple product item into the cart.

    case ADD_MULTIPLE_TO_CART:
      return {
        // Copy the whole state

        ...state,
        cart: [...state.cart, ...action.products],
      };
    // TODO: Add a comment describing the functionality of the UPDATE_CART_QUANTITY case
    // If the reducer action type is UPDATE_CART_QUANTITY it will update the product item quantity.
    // the map method maps all products from the state and assign the value of action.purchaseQuantity into product.purchaseQuantity if and only if
    // action._id is exactly equal to product._id and finally update the cart.  
    case UPDATE_CART_QUANTITY:
      return {
        // Copy the whole state
        ...state,
        // assign cartOpen value to be true
        cartOpen: true,
        cart: state.cart.map((product) => {
          // check if action._id is exactly equal to product._id
          if (action._id === product._id) {
            // assign the value of action.purchaseQuantity into product.purchaseQuantity
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };
    // TODO: Add a comment describing the functionality of the REMOVE_FROM_CART case
    // If the reducer action type is REMOVE_FROM_CART it will remove the product item from the cart using filter method.
    // the filter method filters all products from the cart with out the product item which have an id of
    // the current product item that we are intended to remove. and store the remaining products in the newState variable.
    // and then if the length of newState is greater than 0(if we have at least one remaining product) then update the cart by assigning the value of newState variable.  
    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      return {
        // Copy the whole state

        ...state,
        // if the length of newState is greater than 0, we have a product item on the cart then cartOpen is true and we can open it unless otherwise it is false then it is closed.
        cartOpen: newState.length > 0,
        cart: newState,
      };

    // If the reducer action type is CLEAR_CART it will clear all products from the cart.
    case CLEAR_CART:
      return {
        // Copy the whole state

        ...state,
        cartOpen: false,
        cart: [],
      };

    // If the reducer action type is TOGGLE_CART it will open or close the cart accordingly.
    case TOGGLE_CART:
      return {
        // Copy the whole state

        ...state,
        cartOpen: !state.cartOpen,
      };

    // If the reducer action type is UPDATE_CATEGORIES it will update the categories from the array of categories in iterable way.

    case UPDATE_CATEGORIES:
      return {
        // Copy the whole state

        ...state,
        categories: [...action.categories],
      };

    // If the reducer action type is UPDATE_CURRENT_CATEGORY it will update the current category.

    case UPDATE_CURRENT_CATEGORY:
      return {
        // Copy the whole state

        ...state,
        currentCategory: action.currentCategory,
      };
    // TODO: Add a comment describing what the default case is for
    // If this reducer doesn't recognize the action type, or doesn't
    // care about this specific action, return the existing state unchanged
    default:
      return state;
  }
};

export default reducer;