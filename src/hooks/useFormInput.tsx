"use client";
import { useState } from "react";
export type InputValuesType = {
  number: string;
  name: string;
  expiration: string;
  cvc: string;
};
// const initialState = {
//   cardNumber: '',
//   cardName: '',
//   cardExpiration: '',
//   cardCVC: '',
// // };

// const useFormInput = (initialState: InputValuesType) => {
//   if (initialState) {
//     const [inputValues, setInputValues] = useState<InputValuesType>(initialState);

//     // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     //   setInputValues(event.target.value);
//     // };

//     // return {
//     //   inputValues,
//     //   onChange: handleChange,
//     // }

//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//       const { value, name } = event.target;
//       setInputValues(
//         {
//           ...inputValues,
//           [name]: value,
//         },
//       );

//       return {
//         inputValues,
//         onChange: handleChange,
//       };
//     };

//   }

// };

// export default useFormInput;