import { InputValuesType } from "@/hooks/useFormInput";
import { ReactNode } from "react";

type PlaceholderProps = {
  value: string;
  className?: string;
  label: string;
  children: ReactNode;
};

const CreditCardInfoPlaceholder = ({ className = '', label, children, value }: PlaceholderProps) => {
  return (
    <div className={ `${ className }  grid gap-2 ` }>
      <div className="text-base">
        {label}
      </div>
      <div className="value font-bold text-2xl uppercase drop-shadow-j-shadow">{
        value ? value : children
      }</div>
    </div>
  );
};
export default CreditCardInfoPlaceholder;