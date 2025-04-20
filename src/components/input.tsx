import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styles from '../styles/componentStyles/input.style';

const Input: React.FC<TextInputProps> = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor="#F0E3CAA3"
      {...props}
    />
  );
};

export default Input;
