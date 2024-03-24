import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window');

const COLORS = {
    primary: "#4a8db7",
    secondary : "#ffffe6",
    lightWhite: "#e9eef2",
    red: "#be2121",
    
};
const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 44,
    height,
    width
  };
export {COLORS, SIZES};