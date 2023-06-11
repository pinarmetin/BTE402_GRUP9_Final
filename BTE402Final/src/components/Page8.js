import React from 'react'
import { View, Text, Button, Image, ImageBackground, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
      height:'15%',
      borderWidth: 5,
      borderColor: "#EB144C",
      borderRadius: 60
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

const Page8 = () => {
    const navigation = useNavigation();

  return (
    <View>
      
      <ImageBackground source={require('../img/pembe_arkaplan.png')}
            style={styles.bg}>
          <Text style={styles.userText}>
                    <Image style={styles.userImg}
                  source={require('../img/aslan_avatar.jpg')}/> 
                    UserName
          </Text>

          <Text style={styles.title}>
          Kuzu Zumi
          </Text>

            

            <View  style={styles.view}>

              <Text style={styles.text}>
              <Image style={styles.img}
                     source={require('../img/oku.png')}/>
                    Oku
              </Text>

              <Text style={styles.text}>
              <Image style={styles.img}
                    source={require('../img/izle.png')}/>
                     İzle
              </Text>

            </View>

            <Button title='ileri' onPress={() => navigation.navigate("Page9")}/>
            
      </ImageBackground>

   
 </View>
  )
}

export default Page8
