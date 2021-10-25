import React, {useState, useEffect} from 'react'
import { Text, Button, ScrollView, View, StyleSheet} from 'react-native'

export default function Coffee(){
    const [coffeeList, setCoffeeList] = useState()
    const[temperature, setTemperature] = useState('hot')
    useEffect(() => { 
        fetch(`https://api.sampleapis.com/coffee/${temperature}`)
        .then(response => response.json())
        .then(setCoffeeList)
        .catch(alert)
        }, [temperature])
        return(
            <ScrollView>
                <View style={styles.buttons}>
                <Button style={styles.buttons} title="Hot" onPress={()=> setTemperature('hot')} />
                <Button title="Iced" onPress={()=> setTemperature('iced')} />
                </View>

                {!coffeeList
                ? <Text>Loading...</Text>
                : coffeeList.map(item => <Text key={item.id}>{item.title}</Text>)
                }

            </ScrollView>
        )


}

const styles = StyleSheet.create({
   
    buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
}
})