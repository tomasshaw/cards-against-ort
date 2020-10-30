import React from 'react'
import { Button, Text, View } from 'react-native'
import Styles from '../../components/styles'
import Card from '../../components/card'


export default function Game({ navigation }) {
	return (
        //Claramente aca hay que crear MUCHOS componentes 
		<View style={Styles.container}>
			<View style={Styles.navbar}></View>
            <View style={Styles.bodyGame}>
                <View style={Styles.blackCardContainer}>
                    <View style={Styles.cardContainer}>
                        <View style={[Styles.card, Styles.blackBg]} /> 
                    </View>
                    </View>
                    <View style={Styles.divider} />
                    <View style={Styles.whiteCardsContainer}>
                        <View style={Styles.cardContainer}>
                            <View style={[Styles.card, Styles.whiteBg]}></View>
                        </View>
                    </View>
                    <View style={Styles.buttonContainer}>
                        <Button
                            title= 'Enviar'
                            color= 'grey'
                            //onPress={}
                        />
                        <Button
                            title="Go back"
                            onPress={() => navigation.goBack()}
                        />
                    </View>
            </View>
        </View>
	)
}
