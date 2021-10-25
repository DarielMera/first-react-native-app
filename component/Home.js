import React from "react"; // we have to import react
import {View, Text, Button, StyleSheet, Image} from 'react-native'; //we have to import the jsx (really components)

export default function Home({ navigation }) { // navigator is a free prop we get
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={{uri: 'https://images.pexels.com/photos/9638442/pexels-photo-9638442.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}}/>
            <Text style={styles.textStyle}>Welcome Home</Text>
            <Button title="See details>" onPress={()=> navigation.navigate('Details')} />
            <Button title="See details>" onPress={()=> navigation.navigate('Coffee')} />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 64,
        height: 64,
    },
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
},
textStyle: {
    fontSize: 48,
    textAlign: 'center',
}

})