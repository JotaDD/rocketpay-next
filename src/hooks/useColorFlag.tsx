import colors from '../utils/colors';
import ccAmex from '../public/cc-amex.svg';
import ccVisa from '../public/cc-visa.svg';
import ccMastercard from '../public/cc-mastercard.svg';
import ccDefault from '../public/cc-default.svg';


export type ColorFlagType = {
  cardFlag: string;
  firstColor: string;
  secondColor: string;
}

const useColorFlag = (flag: string): ColorFlagType => {

  // const flagTypes = {
  //   visa: <ccVisa/>,
  //   mastercard: <ccMastercard/>,
  //   amex: <ccAmex/>,
  //   default: <ccDefault/>,
  // }
  // const test = Object.keys(flagTypes).map((key) => {
  //  return key
  // })
  //  console.log(test);
   

  return {
    cardFlag: flag,
    firstColor: colors[flag][0],
    secondColor: colors[flag][1],
  };
};

export default useColorFlag;