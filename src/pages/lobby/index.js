import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Button, Text, View } from 'react-native'
import Styles from '../../components/styles'
import { ListItem } from 'react-native-elements'


export default function Lobby({ navigation, route }) {
	const { name } = route.params || { name: 'Invitado' }
	const { lobbyId } = route.params 

	const list = [
		{
		  nameP: 'Pepe',
		  //idP: 123,
		},
		{
		   nameP: 'Coco',
		  // idP: 234,
		},
	]
	const isValidGame = true //cambiar por min de jugadores necesario


	const handleGotToGame = () => {
		navigation.navigate('Game')
	}
	
	return (
		<View style={Styles.container}>
			<StatusBar style="none" />
			<View style={Styles.titleLobbyContainer}>
				<Text style={[Styles.whiteText, Styles.mainText]}>Hola {name}{'\n'}</Text>
				<Text style={[Styles.whiteText, Styles.importantText]}>Sala de juego</Text>
				<Text style={[Styles.greyText, Styles.importantText]}>#{lobbyId}</Text>
			</View>

			<View style={Styles.playersContainer}>
			{
				//no logro sacarle el fondo blanco
				list.map((item, i) => (
				<ListItem key={i} bottomDivider>
					<ListItem.Title> 
						<Text style= {Styles.importantText}>{item.nameP}</Text> 
					</ListItem.Title>
				</ListItem>
				))	
			}
			</View>
			<Button
				title= 'Play now'
				//disabled = { isValidGame ? true : false }
				color={isValidGame ? 'green' : '#63C132'}
				onPress={handleGotToGame}
			/>
			<Button
				title="Go back"
				onPress={() => navigation.goBack()}
				//onPress={() => navigation.navigate('Home')}
				//onPress={() => navigation.push('Home')}
			/>
		</View>
	)
}
