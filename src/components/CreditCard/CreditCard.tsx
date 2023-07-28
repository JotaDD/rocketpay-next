import CreditCardBackground from "./CreditCardBackground";
import ccBg from '../../../public/cc-bg.svg';

import CreditCardInfo from "./CreditCardInfo/CreditCardInfo";
import CreditCardLogo from "./CreditCardLogo";
import useColorFlag from "@/hooks/useColorFlag";
import { ColorFlagType } from "@/hooks/useColorFlag";
import { useState } from "react";

const CreditCard = () => {
  const defaultColor = useColorFlag('visa');
  const [colors, setColors] = useState<ColorFlagType>(defaultColor)

  
  return (
    <section className={ `cc flex flex-col justify-between p-8 h-[23rem] w-[36rem] bg-no-repeat bg-center bg-cover relative` } style={ { backgroundImage: `url(${ defaultColor.cardFlag})` } }>
      <CreditCardBackground colors={colors} />
      <CreditCardLogo cardFlag={colors.cardFlag} />
      <CreditCardInfo />
    </section>
  );
};
export default CreditCard;