import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { Button, Image, ImageBackground, Text, TextInput, View, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  bg: {
    width:'100%', 
    height:'100%'
  },
  view: {
    alignItems:'center',
    justifyContent:'center',
    marginBottom:265, 
    marginTop:200
  },
  img: {
    width:100, 
    height:100,
    borderRadius: 50
  },
  text: {
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
    textDecorationLine: 'underline'
  }
});

const Page3 = () => {
  const navigation = useNavigation();
  const [number, onChangeNumber] = React.useState('');
  return (
    <View style={{
      width:'100%',
      height:'100%'
     }}>

      <ImageBackground source={require('../img/arkaplan2.png')}
            style={styles.bg}>
      <View style={styles.view}>
        <Image style={styles.img}
              source={require('../img/aslan_avatar.jpg')}
        /> 
              <Text style={styles.text}>
                  Adımızı Yazalım
              </Text>
              <TextInput
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Benim adım..."
              keyboardType='name-phone-pad'
              />
      </View>

      <Button
              title='ileri' 
              onPress={() => navigation.navigate("Page4")}/>
      </ImageBackground>

    </View>
        
  )
}

export default Page3
