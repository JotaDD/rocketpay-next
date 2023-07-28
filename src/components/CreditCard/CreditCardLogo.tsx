import ccIcon from '../../../public/cc-icon.svg';
import ccDefault from '../../../public/cc-default.svg';
import Image from "next/image";
const CreditCardLogo = () => {
  return (
    <div className='flex justify-between items-center relative'>
      <span>
        <Image src={ ccIcon } alt='ícone padrão de cartão' />
      </span>
      <span>
        <Image src={ ccDefault } alt="ícone do cartão de crédito selecionado" />
      </span>
    </div>
  );
};
export default CreditCardLogo;