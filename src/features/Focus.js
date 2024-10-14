import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native'
import {colors} from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes'

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null)
  console.log(subject)
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}
        onChangeText={setSubject} label="what would you like to focus on?" />
        <View>
          <RoundedButton style={styles.button} title="+" size={50} onPress={() => addSubject(subject)} />
        </View>
    </View>    
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    
  },
  button: {
    justifyContent: 'center'
  },
  textInput: {
    flex: 0.8,
    marginRight: spacing.sm,
  },
  inputContainer: {
    //flex: 0.5,
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
});