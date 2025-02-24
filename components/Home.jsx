import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View>
      <Text style={styles.text}>Hello Raj , Welcome Your login SucessFully</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        color:'red',
        fontSize:50, 
        margin:'auto',
        fontWeight:900, 
        textAlign:'center',
        marginTop:'50%'
    }
})