import React, { startTransition } from 'react'
import { View, Text, Image, Button, ImageBackground, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Page6 from './Page6';

const styles = StyleSheet.create({
  bg: {
    width:'100%', 
    height:'100%'
  },
  userText: {
    fontSize:15,
    fontWeight:'thin',
    textAlign:'center'
  },
  userImg: {
    width:20, 
    height:30,
    borderRadius: 50
  },
  title: {
    fontSize:35,
    fontWeight:'bold',
    textAlign:'center',
    textDecorationLine: 'underline',
    marginTop:10
  }, text: {
      fontSize:35,
      fontWeight:'bold',
      textAlign:'center',
      width:'100%',
    height:'10%',
      marginTop:10,
      borderWidth: 5,
      borderColor: "#036BFF",
      borderRadius: 50
  },
  img: {
    width:40, 
    height:40
  },
  view: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems:'flex-start'
  }
});

const Page5 = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground source={require('../img/arkaplan_mavi.png')}
                      style={styles.bg}>
        <Text style={styles.userText}>
          <Image style={styles.userImg}
                source={require('../img/aslan_avatar.jpg')}/> 
           UserName
        </Text>

        <Text style={styles.title}>
           Oyun Alanım
        </Text>

       <View  style={styles.view}>
          <Text style={styles.text}>
            <Image style={styles.img}
                 source={require('../img/puzzle.png')}/>
              Puzzle - Kış
          </Text>
          
        <Text style={styles.text}>
            <Image style={styles.img}
                  source={require('../img/puzzle.png')}/>
              Puzzle - Hayvanlar
          </Text>

          <Text style={styles.text}>
            <Image style={styles.img}
                 source={require('../img/brain.png')}/>
              Geometrik Şekiller
          </Text>

          <Text style={styles.text}>
            <Image style={styles.img}
                  source={require('../img/brain.png')}/>
            Ağır - Hafif
          </Text>
          
          <Text style={styles.text}>
            <Image style={styles.img}
                  source={require('../img/brain.png')}/>
            Mevsimler
          </Text>
       </View>

        <Button title='ileri' 
        onPress={() => navigation.navigate("Page6")}/>
      </ImageBackground>
    </View>
  )
}

export default Page5
