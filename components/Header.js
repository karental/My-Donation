import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';


const Header = props => {
    return(
<View style={styles.header}>
    <Text style = {styles.headerTitle}>{props.title}</Text>
</View>
    );
};

const styles = StyleSheet.create({
header: {
    width:'100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: "#018383",
    alignItems: 'center',
    justifyContent: 'center'
},
headerTitle:{
    color:"#42e6a4",
    fontSize: 30
}
});
export default Header;