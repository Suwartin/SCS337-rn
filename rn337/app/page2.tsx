// page2.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Page2() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Array.from({ length: 12 }, (_, i) => {
        const screenName = `Ex${String(i + 1).padStart(2, '0')}`;
        return (
          <TouchableOpacity
            key={i}
            style={styles.button}
            onPress={() => navigation.navigate(screenName as never)}
          >
            <Text style={styles.buttonText}>{screenName}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#50E3C2',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginVertical: 6,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
