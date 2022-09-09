import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

function AddColors(){

    const [colors, setColors] = useState([]);

    return (<View>
        <Button title="Add Colors"
        onPress={()=> {
            console.log(colors);
            console.log('-------------<br>');
            setColors([...colors, randomRgb()]);
        }} />
        <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem ={({ item }) => {
            return <View style={{height:100, width:100, backgroundColor: item } }/>
            }
        }
        />
        <Text>{randomRgb()}</Text>
        
    </View>);
}

const randomRgb =() => {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    // console.log('r='+r);
    // console.log('g='+g);
    // console.log('b='+b);
    // console.log('------');
    return `rgb(${r}, ${g}, ${b})`;
    return 'rgb('+ r +','+ g +','+ b +')';
}

export default AddColors;