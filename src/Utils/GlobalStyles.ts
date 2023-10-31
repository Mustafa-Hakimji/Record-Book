import {StyleSheet} from 'react-native';

export const gStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerAlignCenter: {
    flex: 1,
    alignItems: 'center',
  },

  rowContainerCenterBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowContainerSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBlack: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  textBlackWhite: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
  textCustom: {
    fontSize: 18,
    fontWeight: '700',
  },

  input: {
    padding: 5,
    paddingLeft: 15,
    fontSize: 17,
    fontWeight: '600',
    color: 'black',
  },
});
