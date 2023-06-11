import React from 'react'
import { View,Text, Button, Image, ImageBackground, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Page5 from './Page5';

const styles = StyleSheet.create({
  bg: {
    width:'100%', 
    height:'100%'
  },
  userImg: {
    width:20, 
    height:30,
    borderRadius: 50
  },
  userText: {
    fontSize:15,
    fontWeight:'thin',
    textAlign:'center'
  },
  title:{
    fontSize:35,
    fontWeight:'bold',
    textAlign:'center',
    textDecorationLine: 'underline',
    marginTop:10
  },
  view: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems:'flex-start'
  },
  text: {
    fontSize:35,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:10,
    borderWidth: 5,
    width:'100%',
    height:'15%',
    borderColor: "#036BFF",
    borderRadius: 50
  },
  img : {
    width:50, 
    height:50,
    borderRadius: 30
  }
});

const Page4 = () => {
  const navigation = useNavigation();
  return (
    <View>
<ImageBackground source={require('../img/arkaplan2.png')}
      style={styles.bg}>
         
       
        <Text style={styles.userText}>
          <Image style={styles.userImg}
                source={require('../img/aslan_avatar.jpg')}/> 
           UserName
        </Text>

        <Text style={styles.title}>
            Kategori Seçelim
        </Text>

        <View 
        style={styles.view}>
          <Text style={styles.text}>
            <Image style={styles.img}
                   source={require('../img/game.png')}/>
              Oyun Oyna
          </Text>

          <Text style={styles.text}>
            <Image style={styles.img}
                  source={require('../img/aslan.png')}/>
            Kitap Oku
          </Text>

          <Text style={styles.text}>
            <Image style={styles.img}
                 source={require('../img/ressam.png')}/>
              Boyama Yap
          </Text>
        </View>

        <Button title='ileri' 
        onPress={() => navigation.navigate("Page5")}/>
</ImageBackground>
    </View>
  )
}

export default Page4;
