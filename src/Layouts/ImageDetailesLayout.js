import React from "react";
import { View, Text, Image } from "react-native";

var ImageDetailesLayout = props => {

    return(
        <View>
            <Text>
                Image Name is : {props.title}
            </Text>
            <Image source={props.imageSource} />
        </View>
    );

}

export default ImageDetailesLayout;