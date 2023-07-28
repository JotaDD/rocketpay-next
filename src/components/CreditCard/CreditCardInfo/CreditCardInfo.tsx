import CreditCardInfoPlaceholder from "./CreditCardInfoPlaceholder";
import ccChip from "../../../../public/cc-chip.svg";
import Image from "next/image";
import CreditCardNumber from "./CreditCardNumber";
import { InputValuesType } from "@/hooks/useFormInput";

type CreditCardInfoType = {
  inputValues: InputValuesType;
};

const CreditCardInfo = ({ inputValues }: CreditCardInfoType) => {
  const { number, name, expiration, cvc } = inputValues;
  return (
    <div className="grid gap-2">
      <CreditCardNumber number={ number } />

      <CreditCardInfoPlaceholder
        value={ name }
        label="Nome do titular" >
        FULANO DA SILVA
      </CreditCardInfoPlaceholder>

      <div className=" flex justify-between items-center">
        <CreditCardInfoPlaceholder
          value={ expiration }
          label="Expiração" >
          02/32
        </CreditCardInfoPlaceholder>
        <CreditCardInfoPlaceholder
          value={ cvc }
          label="CVC" >
          123
        </CreditCardInfoPlaceholder>
        <Image src={ ccChip } alt="ícone de chip de cartão de crédito" />
      </div>

    </div>
  );
};
export default CreditCardInfo;