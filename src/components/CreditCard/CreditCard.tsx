import CreditCardBackground from "./CreditCardBackground";
import ccBg from '../../../public/cc-bg.svg';

import CreditCardInfo from "./CreditCardInfo/CreditCardInfo";
import CreditCardLogo from "./CreditCardLogo";

const CreditCard = () => {
  return (
    <section className={ `cc flex flex-col justify-between p-8 h-[23rem] w-[36rem] bg-no-repeat bg-center bg-cover relative` } style={ { backgroundImage: `url(${ ccBg })` } }>
      <CreditCardBackground />
      <CreditCardLogo />
      <CreditCardInfo />
    </section>
  );
};
export default CreditCard;