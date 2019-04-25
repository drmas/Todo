import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { fonts, colors } from '../theme';

const AddButton = ({
    onPress,
}) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text} >+</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      height: 2,
      width: 2
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    opacity: 0.8
  },
  text: {
    fontFamily: fonts.regular,
    fontSize: 40,
    color: colors.backgroundDark,
    marginTop: 12,
  }
})

export default AddButton;
