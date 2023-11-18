import React, { useEffect } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
const FocusedStatusBar = ()=>{}
const MyComponent = () => {
  useEffect(() => {
    // Set the status bar style when the component mounts
    StatusBar.setBarStyle('dark-content');

    // Cleanup function to reset status bar style when the component unmounts
    return () => {
      StatusBar.setBarStyle('default');
    };
  }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello, World!</Text>
//     </View>
//   );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MyComponent;
