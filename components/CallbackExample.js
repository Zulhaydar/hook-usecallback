import React, { useState, useCallback } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default function CallbackExample() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(0);

  const calculateSquare = useCallback((num) => {
    console.log('Calculating square...');
    return num * num;
  }, []);

  const handleCalculate = () => {
    const num = parseInt(number);
    if (!isNaN(num)) {
      setResult(calculateSquare(num));
    } else {
      setResult(0);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
        placeholder="Masukkan angka"
        keyboardType="numeric"
        onChangeText={(text) => setNumber(text)}
        value={number}
      />
      <Button title="Hitung Kuadrat" onPress={handleCalculate} />
      <Text style={{ marginTop: 20 }}>Hasil: {result}</Text>
    </View>
  );
}
