import * as Style from "../CreditCardWrapper.style";
import CreditCardInfoPlaceholder from "./CreditCardInfoPlaceholder";
import ccChip from '../../../../public/cc-chip.svg';
import Image from "next/image";
import CreditCardNumber from "./CreditCardNumber";

const CreditCardInfo = () => {
  return (
    <div className="grid gap-2">
      <CreditCardNumber />

      <CreditCardInfoPlaceholder  label="Nome do titular" >
        FULANO DA SILVA
      </CreditCardInfoPlaceholder>

      <Style.CreditCardExtraWrapper>
        <CreditCardInfoPlaceholder label="Expiração" >
          02/32
        </CreditCardInfoPlaceholder>
        <CreditCardInfoPlaceholder label="CVC" >
          123
        </CreditCardInfoPlaceholder>
        <Image src={ ccChip } alt="ícone de chip de cartão de crédito" />
      </Style.CreditCardExtraWrapper>

    </div>
  );
};
export default CreditCardInfo;