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
import {ColorBox} from './components/ColorBox';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={styles.textStyle}>
            Here are some boxes of different colors
          </Text>
          <ColorBox hexCode="#268bd2" color="Blue" />
          <ColorBox hexCode="#d33582" color="Magenta" />
          <ColorBox hexCode="#cb4b16" color="Orange" />
          <ColorBox hexCode="#2aa198" color="Cyan" />
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
});

export default App;
