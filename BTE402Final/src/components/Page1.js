import React from 'react'
import {View,Text, Button, ImageBackground, StyleSheet, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Page2 from './Page2';

const styles = StyleSheet.create({
  bg: {
    width:'100%', 
        height:'100%',
  },
  view: {
    alignItems:'center',
      justifyContent:'center',
      marginBottom:50
  },
  logo: {
    width:150, 
    height:150,
    marginTop:30,
    borderRadius: 80
  },
});


export default Page1 = () => {
    const navigation = useNavigation();
  return (
  
     <View>
        <ImageBackground source={require('../img/arkaplan.png')}
        style={styles.bg}>
          <View
          style={styles.view}>
          <Image style={styles.logo}
            source={require('../img/logo.jpg')}/> 
              <Text style={{
                fontSize:50,
                fontWeight:'bold'
              }}>
                  O-B-O
              </Text>
              <Text style={{
                fontSize:20,
                textDecorationLine: 'underline',
                marginBottom:10
              }}>
                Oku - Boya - Oyna
              </Text>
              <Text style={{
                fontStyle: 'italic'
              }}>
                Karakterinizi ve adınızı belirleyerek oyunlar oynayabilir,{"\n"} masal dinleyebilir ve boyama etkinlikleri yapabilirsiniz.
              </Text>
          </View>
          <Button
          title='Haydi başlayalım..' 
          onPress={() => navigation.navigate("Page2")}
          /> 
        </ImageBackground>
    </View>
  
  )
}