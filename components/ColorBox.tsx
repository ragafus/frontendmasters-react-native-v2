import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

declare const global: {HermesInternal: null | {}};

export type ColorBoxProps = {
  color: string;
  hexCode: string;
};

export const ColorBox: React.FC<ColorBoxProps> = ({color, hexCode}) => {
  const boxColor = {
    backgroundColor: hexCode,
  };
  return (
    <View style={[boxColor, styles.box]}>
      <Text style={styles.boxText}>
        {color}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
