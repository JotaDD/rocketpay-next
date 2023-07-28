import { ReactNode } from "react";

type PlaceholderProps = {
  className?: string;
  label: string;
  children: ReactNode;
};

const CreditCardInfoPlaceholder = ({ className = '', label, children }: PlaceholderProps) => {
  return (
    <div className={ `${ className }  grid gap-2 ` }>
      <div className="text-base">{ children }</div>
      <div className="value font-bold text-2xl uppercase drop-shadow-j-shadow">{ label }</div>
    </div>
  );
};
export default CreditCardInfoPlaceholder;