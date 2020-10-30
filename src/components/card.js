import React from 'react'
import { Button, Text, View, useState} from 'react-native'
import Styles from './styles'

const card = () => {
const [content, setcontent] = useState('bla bla bla')


    return(
        <View style={Styles.card}>
	        <Text>Este es el {content} de una carta</Text>
        </View>
    );
};

export default card;