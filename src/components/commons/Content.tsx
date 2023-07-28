import CreditCard from "../CreditCard/CreditCard";
import CreditCardForm from "../CreditCard/CreditCardForm";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });

const Content = () => {
  return (
    <div className={ ` ${ inter.className } app grid justify-center gap-12 w-[90%] max-w-[42rem] mx-auto p-11 px-24 pb-16 bg-[#202024] border-[#323238] rounded-lg` } >
      <CreditCard />
      <CreditCardForm />
    </div>
  );
};
export default Content;