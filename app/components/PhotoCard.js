import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  ThinGrayLine,
  ThickWhiteLine,
} from './Lines';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3000ff',
    padding: 10,
    flexDirection: 'column',
  },
  card: {
    flex: 1,
    backgroundColor: '#0000FF',
    justifyContent: 'flex-end',
  },
});

export default ({ onPress, content }) => (
  <View style={styles.container}>
    {/* 展开之后第一个卡片第1行 */}
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#5A4A9C',
        height: 40,
        padding: 10,
      }}
    >
      <Text>{content}</Text>
      <ThickWhiteLine width={40} onPress={onPress} />
      <ThickWhiteLine width={60} />
      <ThickWhiteLine width={40} />
    </View>
    {/* 展开之后第一个卡片第二行 */}
    <View style={styles.card}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          paddingBottom: 0,
        }}
      >
      <Text>{content}</Text>
        <ThinGrayLine width={40} />
        <ThinGrayLine width={80} />
        <ThinGrayLine width={50} onPress={onPress} />
      </View>
    </View>

  </View>
);
