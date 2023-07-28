"use client";

import ccAmex from '../../../public/cc-amex.svg';
import ccMaster from '../../../public/cc-mastercard.svg';
import ccDefault from '../../../public/cc-default.svg';
import ccVisa from '../../../public/cc-visa.svg';
import ccIcon from '../../../public/cc-icon.svg';
import Image from "next/image";
import { useEffect, useState } from 'react';

type CreditCardLogoProps = {
  cardFlag: string;
};

const CreditCardLogo = ({ cardFlag }: CreditCardLogoProps) => {
  const [card, setCard] = useState<string>(ccDefault);
  useEffect(() => {
    const handleCard = () => {
      switch (cardFlag) {
        case 'mastercard':
          return ccMaster;
        case 'amex':
          return ccAmex;
        case 'visa':
          return ccVisa;
        default:
          return ccDefault;
      }
    };
    setCard(
      handleCard()
    );

  }, [cardFlag]);



  return (
    <div className='  flex items-center justify-between relative '>
      <Image
        style={ { width: "auto", height: "auto" } }
        src={ ccIcon } width={ 50 } height={ 50 }
        alt="ícone do cartão de crédito selecionado" />
      <span>
        <Image
          style={ { width: "auto", height: "auto" } }
          src={ card } width={ 50 } height={ 50 }
          alt="ícone do cartão de crédito selecionado" />
      </span>
    </div>
  );
};
export default CreditCardLogo;