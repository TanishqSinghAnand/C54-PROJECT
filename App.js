import * as React from 'react';
import { Text, View, StyleSheet , Button , } from 'react-native';

export default class App extends React.Component {
  render() {
    return(
      <View>
      <View style={{marginTop:5 , marginBottom:10  , borderRadius : 100 , width:70 , height:70 , alignItems:"center" }}>
       <Button  title="Bass +"/>
      </View>
            <View style={{marginTop:5 , marginBottom:10  , borderRadius : 100 , width:70 , height:70 , alignItems:"center" }}>
          
       <Button title="Bass -"/>
      </View>
            <View style={{marginTop:5 , marginBottom:10  , borderRadius : 100 , width:70 , height:70 , alignItems:"center" }}> 
            <Button title="Play"/>
      </View>
            <View style={{marginTop:5 , marginBottom:10  , borderRadius : 100 , width:70 , height:70 , alignItems:"center" }}>
       <Button title="Pause"/>
      </View>
            <View style={{marginTop:5 , marginBottom:10  , borderRadius : 100 , width:70 , height:70 , alignItems:"center" }}>
        <Button title="Next"/>
      </View>
            <View style={{marginTop:5 , marginBottom:10  , borderRadius : 100 , width:70 , height:70 , alignItems:"center" }}>
            <Button title="Pervious"/>
      </View>
            <View style={{marginTop:5 , marginBottom:10  , borderRadius : 100 , width:70 , height:70 , alignItems:"center" }}>
        <Button title="Pause"/>
      </View>
      </View>
      
    );
  }
}
