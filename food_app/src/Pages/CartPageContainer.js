// // CartPageContainer.js

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import CartPage from './CartPage';
// import { getCartItem } from '../redux/cartReducer/action'; // Assuming you have the action to get cart items

// const CartPageContainer = () => {
//   const dispatch = useDispatch();
//   const single = useSelector((store) => {
//     return store.productReducer.singleProduct
//   })
//   console.log(single);
//   useEffect(() => {
//     // Fetch cart items when the component mounts
//     dispatch(getCartItem());
//   }, [dispatch]);

//   return (
//     <>
//       {single.map((item) => (
//         <CartPage
//           key={item.id}
//           id={item.id}
//           name={item.name}
//           image={item.image} // Make sure 'image' is a valid image URL
//           price={item.price}
//           quantity={item.quantity}
//         />
//       ))}
//     </>
//   );
// };

// export default CartPageContainer;
