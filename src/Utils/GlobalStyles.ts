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
    alignItems: 'center',
  },

  button: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderBlockColor: 'black',
    borderWidth: 1,
    marginVertical: 20,
    width: '90%',
    borderRadius: 10,
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
    padding: 15,
    paddingLeft: 15,
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    width: '85%',
  },
});
