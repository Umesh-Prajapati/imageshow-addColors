import React from "react";
import { View, Text, Button, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ImageDetailesLayout from "./Layouts/ImageDetailesLayout";

var FlexContainer = () => {
    return(
        <View>
            <ImageDetailesLayout title="halow" imageSource={require('../assets/beach.jpg')}/>
            <ImageDetailesLayout title="fine" imageSource={require('../assets/forest.jpg')}/>
            <ImageDetailesLayout title="come" imageSource={require('../assets/mountain.jpg')}/>
        </View>
    );
}

var style={
    fontStyle:{
        fontSize:25,
        color:'white',
    }
}


export default FlexContainer;