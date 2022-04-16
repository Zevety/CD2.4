import React from "react";
import { View, StyleSheet, Text, Image, Pressable, ScrollView } from "react-native";

const Prof = ({navigation}) => {
  return (
     <View style={{justifyContent: 'center', alignItems: 'center', padding: 24, }}>
      <Text style={styles.paragraph}>Самуэль</Text>
      <Image style={styles.logo} source={require('./assets/cat4.jpg')}/>
      <Text style={styles.textread}>Телефон:</Text>
      <Text style={styles.phonetext}>6(491)663-18</Text>
      <Text style={styles.text_cont, {marginBottom:25}}>Частые контакты </Text>
      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      
      >
      <View>
         <Image style={styles.logo2} source={require('./assets/cat3.jpg')}/>
         <Text style={styles.text_forcont}>Брюс</Text>
         <Text style ={styles.text_phone2}>6(391)533-78</Text>
                 <Pressable
        onPress={() => navigation.navigate('Профиль Брюса')}
        style={{ alignItems: 'center', padding: 10, marginBottom: 10, marginTop: 10, }}
      >
      <Text>профиль</Text>
      </Pressable>
      </View>
      </ScrollView>
      <Pressable
        onPress={() => navigation.navigate('Главная страница')}
        style={{ alignItems: 'center', padding: 10, marginBottom: 10, marginTop: 10, }}
      >
      <Text>Назад</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
   textread: {
    margin: 24,
    marginTop: 20,
    fontSize: 16,
  },
  
    phonetext: {
    margin: 22,
    fontWeight: 'bold',
    marginTop: -9,
    fontSize: 18,
  },
    separator: {
    borderBottomColor: 'black',
    marginRight:20,
    marginTop:5,
    backgroundColor:'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
    text_cont: {
    margin: 22,

    marginTop: -2,
    fontSize: 18,
  },
    text_forcont: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 13,
    fontSize: 14,
  },
    text_phone2: {
    textAlign: 'center',
    marginTop: 10,

  },
  paragraph: {
    margin: 24,
    marginTop: 10,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  logo: {

    borderRadius: 200 / 2,
    height: 128,
    width: 128,
  },
    logo2: {
    
    borderRadius: 200 / 2,
    height: 88,
    width: 88,
  }
});

export default Prof;