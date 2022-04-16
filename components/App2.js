import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}> Брюс Уиллис завершит актёрскую карьеру — у него диагностировали расстройство речи
</Text>
      <Text style={styles.textread}>67-летний актёр решил уйти на пенсию в связи со своим состоянием здоровья. У него диагностировали афазию — расстройство речи, которое чаще всего развивается после инсультов или перенесённых травм головного мозга. Судя по всему, Уиллису стало куда труднее общаться с окружающими, как и работать на площадке. </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
   textread: {
    margin: 24,
    marginTop: -9,
    fontSize: 12,
    textAlign: 'left',
  },
  paragraph: {
    margin: 24,
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  logo: {
    height: 128,
    width: 228,
  }
});
