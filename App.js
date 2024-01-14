import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';

export default function App() {
 const [age, setAge] = useState('');
 const [upperLimit, setLUpperLimit] = useState (0);
 const [lowerLimit, setLowerLimit] = useState (0);

  function calculate(){
    const resultLowerLimit = (220-age) * 0.65;
    const resultUpperLimit = (220-age) * 0.85;
    setLowerLimit(resultLowerLimit);
    setLUpperLimit(resultUpperLimit);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput style={styles.field} value={age} onChangeText={text => setAge(text)}
      keyboardType='decimal-pad'/>
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{lowerLimit.toFixed(0)} - {upperLimit.toFixed(0)} </Text>
      <Button onPress={calculate} title ="Calculate"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginLeft:10,
  },
  field: {
    marginBottom:10,
  }
});
