"use client";
import CreditCard from "../CreditCard/CreditCard";
import { InputValuesType } from "@/hooks/useFormInput";
import CreditCardForm from "../CreditCard/CreditCardForm";
import { Inter } from "next/font/google";
import { ChangeEvent, useState } from "react";

const inter = Inter({ subsets: ['latin'] });
const initialState = {
  number: '',
  name: '',
  expiration: '',
  cvc: '',
};

const Content = () => {
  const [inputValues, setInputValues] = useState<InputValuesType>(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setInputValues(
      {
        ...inputValues,
        [name]: value,
      },
    );
  };

  // const { register, formState  } = useForm()
  return (
    <div className={ ` ${ inter.className } app grid justify-center gap-12 w-[90%] max-w-[42rem] mx-auto p-11 px-24 pb-16 bg-[#202024] border-[#323238] rounded-lg` } >
      <CreditCard inputValues={inputValues} />
      <CreditCardForm inputValues={inputValues} handleChange={handleChange} />
    </div>
  );
};
export default Content;