import React, { useEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import OneSignal from 'react-native-onesignal';

export default function App() {

   useEffect(() => {   
     /* O N E S I G N A L   S E T U P */
     //OneSignal ID- With Firebase AgenciaDigital8600 connected
    OneSignal.setAppId("19e13a52-b381-4ca1-91df-6c0ef5db42a7");
    OneSignal.setLogLevel(6, 0);
    OneSignal.setRequiresUserPrivacyConsent(false);
    OneSignal.promptForPushNotificationsWithUserResponse(response => {
        this.OSLog("Prompt response:", response);
    });
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Agencia Digital 8600</Text>
      <Text style={styles.welcome}>Bem vindo</Text>      
      <Text style={styles.welcome}>Bem vindo</Text>      
    </View>
  ); 
 
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#135bd3',
  },
  text:{
    fontWeight:'bold',
    fontSize:28,
    color: '#FFF',
  },
  welcome:{
    fontSize:19,
    color: '#FFF',
  }
})
