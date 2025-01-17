import { SafeAreaView, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
import UserTabs from './UserTabs.jsx';
import * as Font from 'expo-font';
import React, { useState } from 'react';

async function loadFonts() {
  await Font.loadAsync({
    'Oswald-Medium': require('../../../assets/fonts/Oswald-Medium.ttf'),  // adjust the path accordingly
  });
};

const Welcome = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>

      <SafeAreaView style={styles.mainContent}>
        <Image style = {styles.image} source={require('../../../assets/app-logo.png')} />
        <Text style = {styles.text}>Create an account to reserve your parking spot.</Text>

        <CustomInput placeholder="Username" value={username} setValue={setUsername} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />

        <CustomButton
          style={styles.button}
          textStyle={{ ...styles.commonFont, color: '#A9927D' }}
          title="Sign In"
          color="#171412"
        />
        <CustomButton
          style={styles.button}
          textStyle={{ ...styles.commonFont, color: '#171412' }}
          title="Continue With Google"
          color="#A9927D"
        />
        <CustomButton
          style={styles.button}
          textStyle={{ ...styles.commonFont, color: '#D0D3D2' }}
          title="Continue With Facebook"
          color="#49111C"
        />
        <TouchableOpacity>
          <Text style={styles.clickableText}>Continue as Guest</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <TouchableOpacity>
        <Text style={styles.clickableText}>Do not have an account? CREATE ONE</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    justifyContent: 'center'
  },

  image: {
    marginLeft: 30,
    width: "60%",
    height: 100,
  },

  container:{
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#D0D3D2',
    paddingBottom: 20,
  },

  button: {
    marginTop: 15,
    width: 350,
    alignSelf: 'center',
  },

  clickableText: {
    marginTop: 30,
    color: '#171412',
    alignSelf: 'center',
    textDecorationLine: 'underline',
    fontFamily: 'Oswald-Medium',
    fontSize: 16,
  },

  text: {
    marginLeft: 20,
    marginRight: 33,
    marginBottom: 30,
    fontSize: 23,
    color: '#171412',
    alignSelf: 'center',
    fontFamily: 'Oswald-Bold',
  }
})
export default Welcome;