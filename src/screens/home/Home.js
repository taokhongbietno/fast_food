import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});