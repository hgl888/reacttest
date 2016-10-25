/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Blink extends Component {
    constructor(props){
        super(props);
        this.state = {showText:true};

        setInterval(()=>{
            this.setState({showText:!this.state.showText});
        }, 1000);
    }

    render(){
        let display = this.state.showText ? this.props.text : '';
        return(
            <Text>{display}</Text>
        );
    }
}

 class FlexBox extends Component {
  render() {
    return (
        <View style={{
            flex:1,
            flexDirection:'column',
              justifyContent:'center',
              alignItems:'center',
        }}>
            <View style={{width:50, height:50, backgroundColor:'powderblue'}} />
            <View style={{width:50, height:50, backgroundColor:'skyblue'}} />
            <View style={{width:50, height:50, backgroundColor:'steelblue'}} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
   bigblue:{
       color:'blue',
       fontWeight:'bold',
       fontSize:30,
   } ,
    red:{
        color:'red',
    }
});


