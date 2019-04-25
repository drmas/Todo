import { Platform } from 'react-native';
export default {
  ...Platform.select({
    ios: {
      regular: 'Avenir Next LT Pro',
    }
  })
}