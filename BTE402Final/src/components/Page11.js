import React from 'react'
import { View, Text, Button, Image, ImageBackground, StyleSheet} from "react-native";
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
     height:'10%',
       marginTop:10,
       borderWidth: 5,
       borderColor: "#DB3E00",
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

const Page11 = () => {
  const navigation = useNavigation();
  return (
    <View>
     <ImageBackground source={require('../img/sari_arkaplan.png')}
      style={styles.bg}>

      <Text style={styles.userText}>
      <Image style={styles.userImg}
            source={require('../img/aslan_avatar.jpg')}/> 
            UserName
      </Text>

      <Text style={styles.title}>
           Resim Defterim
      </Text>

        

       <View  style={styles.view}>

            <Text style={styles.text}>
               <Image style={styles.img}
                     source={require('../img/paint.png')}/>
                        Sayfa-1
            </Text>

            <Text style={styles.text}>
            <Image style={styles.img}
                     source={require('../img/paint.png')}/>
                     Sayfa-2
            </Text>

            <Text style={styles.text}>
               <Image style={styles.img}
                     source={require('../img/paint.png')}/>
                     Sayfa-3
            </Text>

            <Text style={styles.text}>
               <Image style={styles.img}
               source={require('../img/paint.png')}/>
               Sayfa-4
            </Text>
            
            <Text style={styles.text}>
            <Image style={styles.img}
                     source={require('../img/paint.png')}/>
                     Sayfa-5
            </Text>

       </View>

       <Button title='geri' 
       onPress={() => navigation.navigate("Page10")}/>

      </ImageBackground>
 </View>
  )
}

export default Page11
