import { ReactNode } from "react";

type InputProps = {
  id:string;
  className?: string
  children: ReactNode;
}

const Input = ({id, children, className = ''}: InputProps) => {
  return (
    <div className={`${className} grid gap-2` }>
      <label htmlFor={id} className=" font-semibold text-[1.2rem] leading-6 uppercase tracking-[0.01px] text-[#E1E1E6] ">
        {children}
        <input id={id} className="w-full bg-gray-900 border border-gray-700 rounded-md h-10 px-5 uppercase text-white " />
      </label>
    </div>
  )
}
export default Input