import logo from '../../../public/logo.svg'
import Image from 'next/image';

const Header = () => {
  return (
    <header className='flex items-center  '>
      <Image src={logo} alt="Rocketpay Icon"/>
    </header>
  )
}
export default Header;