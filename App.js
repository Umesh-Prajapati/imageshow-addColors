
import {  Button, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';

import FlexContainer from './src/FlexContainer';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ImageDetailesLayout from './src/Layouts/ImageDetailesLayout';
import AddColors from './src/Layouts/AddColors';

function App(navi){
  return (
          <View style={{flex:1, }}>
            <View style={{flex:1, backgroundColor:"orange",}}>
                <TouchableOpacity onPress={()=> (navi.navigation.navigate('Container'))}>
                    <Text style={style.fontStyle} >Click to First Layouts</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> (navi.navigation.navigate('addColor'))}>
                    <Text style={style.fontStyle} >Add Colors</Text>
                </TouchableOpacity>
            </View>
        </View>
  );
};

const AppNavigatore = createStackNavigator(
  {
    Home:{
      screen : App,
      title : 'Home',
    },
    Container:{
      screen : FlexContainer,
      title : "FlexContainer"
    },
    image :{
      screen : ImageDetailesLayout
    },
    addColor : {
      screen : AddColors,
      title : "AddColorss",
    },
  },
  {
    initialRouteName : 'Home',
    defaultNavigationOptions:{
      // title:'Home',
    }
  }
);

var style={
  fontStyle:{
      fontSize:25,
      color:'white',
      margin:50,
  }
}

export default createAppContainer(AppNavigatore)
