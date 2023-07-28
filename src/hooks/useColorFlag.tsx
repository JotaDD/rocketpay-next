import colors from '../utils/colors';

export type ColorFlagType = {
  cardFlag: string;
  firstColor: string;
  secondColor: string;
}

const useColorFlag = (flag: string): ColorFlagType => {
  return {
    cardFlag: flag,
    firstColor: colors[flag][0],
    secondColor: colors[flag][1],
  };
};

export default useColorFlag;