import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens';
import { Button } from './src/components';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Home />
      <Button
      onPress={()=>alert("le minh trung")}
      tittle="Nhan"
      />
       <Button
      onPress={()=>alert("le minh trung")}
      tittle="Nhan"
      />
       <Button
      onPress={()=>alert("le minh trung")}
      tittle="Nhan"
      />
       <Button
      onPress={()=>alert("le minh trung")}
      tittle="Nhan"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
