// import { usePaystackPayment } from "react-paystack";

// const config = {
//     reference: new Date().getTime().toString(),
//     email: "user@example.com",
//     amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
//     publicKey: process.env.PAYSTACK_PUBLIC_KEY,
// };

// // you can call this function anything
// const onSuccess = (reference) => {
//     // Implementation for whatever you want to do with reference and after success call.
//     console.log(reference);
// };

// // you can call this function anything
// const onClose = () => {
//     // implementation for  whatever you want to do when the Paystack dialog closed.
//     console.log("closed");
// };

// export const PaystackGateway = () => {
//     const initializePayment = usePaystackPayment(config);
//     return (
//         <div>
//             <button
//                 type="button"
//                 onClick={() => initializePayment(onSuccess, onClose)}
//             >
//                 Pay with Paystack
//             </button>
//         </div>
//     );
// };
