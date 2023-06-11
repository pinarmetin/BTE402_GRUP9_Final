import React from 'react'
import {View,Text, Button, Image, ImageBackground, StyleSheet  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Page3 from './Page3';

const styles = StyleSheet.create({
  bg: {
    width:'100%', 
    height:'100%'
  },
  img: {
    width:100, 
    height:100,
    borderRadius: 50
  },
  view: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'flex-start'
  },
  text: {
    fontSize:35,
    fontWeight:'bold',
    textAlign:'center',
    textDecorationLine: 'underline',
    marginBottom:50,
    marginTop:10
  },
});

export default Page2 = () => {
    const navigation = useNavigation();
  return (
    <View style={{
      width:'100%',
      height:'100%'
     }}>
       
    <ImageBackground source={require('../img/arkaplan2.png')}
          style={styles.bg}>
            <Text style={styles.text}>
                Avatarımızı Seçelim
            </Text>

            <View style={styles.view}>
            <Image style={styles.img}
                   source={require('../img/aslan_avatar.jpg')}/> 

            <Image style={styles.img}
                    source={require('../img/geyık_avatar.png')}/>

            <Image style={styles.img}
                    source={require('../img/domuz_avatar.png')}/>
            </View>

            <View style={styles.view}>
            <Image style={styles.img}
                   source={require('../img/kedy_avatar.png')}/> 

            <Image style={styles.img}
                    source={require('../img/kopek_avatar.png')}/>

            <Image style={styles.img}
                     source={require('../img/kostebek_avatar.png')}/>
            </View>
            
            <View style={styles.view}>
            <Image style={styles.img}
                   source={require('../img/kurbaga_avatar.png')}/> 

            <Image style={styles.img}
                    source={require('../img/mavılı_avatar.png')}/>

            <Image style={styles.img}
                    source={require('../img/morlu_avatar.png')}/>
            </View>

            <Button
            title='ileri' 
            onPress={() => navigation.navigate("Page3")}/> 
            
    </ImageBackground>
           
    </View>
  )
}
