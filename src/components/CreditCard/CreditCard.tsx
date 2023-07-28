"use client";
import { InputValuesType } from "@/hooks/useFormInput";
import CreditCardBackground from "./CreditCardBackground";
import CreditCardForm from "./CreditCardForm";
import CreditCardInfo from "./CreditCardInfo/CreditCardInfo";
import CreditCardLogo from "./CreditCardLogo";
import useColorFlag from "@/hooks/useColorFlag";
import { ColorFlagType } from "@/hooks/useColorFlag";
import { useState } from "react";

type CreditCardType = {
  inputValues: InputValuesType;
}

const CreditCard = ({ inputValues }: CreditCardType) => {
  const defaultColor = useColorFlag('amex');
  const [colors, setColors] = useState<ColorFlagType>(defaultColor)

  return (
    <section className={ `cc flex flex-col justify-between p-8 h-[23rem] w-[36rem] bg-no-repeat bg-center bg-cover relative` } style={ { backgroundImage: `url(${ defaultColor.cardFlag})` } }>
      <CreditCardBackground colors={colors} />
      <CreditCardLogo cardFlag={colors.cardFlag} />
      <CreditCardInfo inputValues={inputValues} />
    </section>
  );
};
export default CreditCard;