import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {gStyles} from '../../Utils/GlobalStyles';
import {useDispatch} from 'react-redux';
import {deleteExpenses} from '../../Redux/Slices/Expences';

const DeleteModal = ({visible, item, setVisible}) => {
  const dispatch = useDispatch();

  const handleYes = () => {
    dispatch(deleteExpenses(item));
    setVisible(false);
  };
  return (
    <Modal transparent visible={visible}>
      <View style={gStyles.containerCenter}>
        <View
          style={{
            height: '18%',
            width: '90%',
            backgroundColor: 'white',
            borderRadius: 20,
            borderWidth: 1,
          }}>
          <Text
            style={[
              gStyles.textBlack,
              {textAlign: 'center', marginVertical: 20},
            ]}>
            Are you sure ?
          </Text>
          <View
            style={[gStyles.rowContainerCenterBetween, styles.buttonContainer]}>
            <TouchableOpacity onPress={handleYes} style={styles.button}>
              <Text style={gStyles.textBlackWhite}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.button}>
              <Text style={gStyles.textBlackWhite}>No </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteModal;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'space-around',
    marginTop: 40,
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: '#5BBFFF',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
