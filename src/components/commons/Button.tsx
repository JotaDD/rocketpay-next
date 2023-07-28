import { MouseEvent, ReactNode } from "react";
import { Transition } from "@tailwindui/react";

type ButtonProps = {
  children: ReactNode;
};


const Button = ({ children }: ButtonProps) => {
  const handleClick = (event:MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  return (
    <>
      <button onClick={handleClick} className=" mt-6 flex justify-center items-center py-6 rounded-xl cursor-pointer border-none bg-[#42D3FF] text-2xl  font-semibold text-[#121212] hover:brightness-110 ">{ children }
      </button>
    </>
  );
};
export default Button;