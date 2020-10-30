import React from 'react'
import { Button, Text, View } from 'react-native'
import Styles from '../../components/styles'
import Card from '../../components/card'


export default function Game({ navigation }) {
	return (
		<View style={Styles.container}>
			<View style={Styles.navbar}></View>
            <View style={Styles.bodyGame}>
            <View style={Styles.blackCardContainer}>
                <View style={Styles.cardContainer}>
                    <View style={[Styles.card, Styles.blackBg]}></View>
                <View style={Styles.divider} />  
            
            </View>
        <View style={Styles.whiteCardsContainer}>
            <View style={Styles.cardContainer}>
                <View style={[Styles.card, Styles.whiteBg]}></View>
            </View>
            <View style={Styles.cardContainer}>
                <View style={[Styles.card, Styles.whiteBg]}></View>
            </View>
            <View style={Styles.cardContainer}>
                <View style={[Styles.card, Styles.whiteBg]}></View>
            </View>
        </View>
          
                <Button
                    title="Go back"
                    onPress={() => navigation.goBack()}
                />
      
        </View>      
        </View>

        </View>
	)
}
