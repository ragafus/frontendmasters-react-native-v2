/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={styles.textStyle}>
            Here are some boxes of different colors
          </Text>
          <View style={[styles.secondColor, styles.box]}>
            <Text style={styles.boxText}>Second color</Text>
          </View>
          <View style={[styles.thirdColor, styles.box]}>
            <Text style={styles.boxText}>Third color</Text>
          </View>
          <View style={[styles.firstColor, styles.box]}>
            <Text style={styles.boxText}>First color</Text>
          </View>
          <View style={[styles.fourthColor, styles.box]}>
            <Text style={styles.boxText}>Fourth color</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  firstColor: {
    backgroundColor: 'red',
  },
  secondColor: {
    backgroundColor: 'green',
  },
  thirdColor: {
    backgroundColor: 'blue',
  },
  fourthColor: {
    backgroundColor: 'purple',
  },
  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  boxText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
