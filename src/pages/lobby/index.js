import { StatusBar } from 'expo-status-bar'
import React, { useContext, useState, useEffect} from 'react'
import { Share, Button, Text, View, Linking } from 'react-native'
import Styles from '../../components/styles'
import { ListItem } from 'react-native-elements'
import SocketContext from '../../global/context/index'


export default function Lobby({ navigation, route }) {
	const socket = useContext(SocketContext);
	const { name } = route.params;
	const [room, setRoom] = useState('');
	const [playersList, setPlayersList] = useState([])
	const [isValidGame, setIsValidGame] = useState(true)

	const onSharePress = () => Share.share(shareOptions)
	

	useEffect(() => {
		socket.on('joinRoom', room => {
			setRoom(room)
		});
		socket.on('playerList', players => {
			  setPlayersList(playersList => 
				[...playersList, players]);	 
				setIsValidGame(handleValidGame())
		});
	});
	const handleValidGame = () => {
		return playersList.length > 2
	}
	const shareOptions = {
		message:`Hola! Te estoy invitando a jugar a CAO. Unite a la sala ${room.id}`,
	}

	const handleGoToGame = () => {
		socket.emit('newRound', room.id)
		navigation.navigate('Game')
	}


	return (
		<View style={Styles.container}>
			<StatusBar style="none" />
			<View style={Styles.titleLobbyContainer}>
				<Text style={[Styles.whiteText, Styles.mainText]}>
					Hola {name}
					{'\n'}
				</Text>
				<Text style={[Styles.whiteText, Styles.importantText]}>
					Sala de juego
				</Text>
				<Text style={[Styles.greyText, Styles.importantText]}>
					#{room.id}
				</Text>
			</View>

			<View style={Styles.playersContainer}>
				{playersList.map((player, i) => (
					<ListItem containerStyle={Styles.blackBg}>
						<ListItem.Title>
							<Text style={[Styles.importantText, Styles.greyText]}>
								Jugador {i + 1}:
							</Text>
						</ListItem.Title>
						<ListItem.Subtitle>
							<Text style={[Styles.importantText, Styles.whiteText]}>
								{player.name}
							</Text>
						</ListItem.Subtitle>
					</ListItem>
				))}
			</View>
			<View style={Styles.buttonContainer}>
				<Button
					title="Play now"
					disabled = { isValidGame ? false : true}
					color= 'green'
					onPress={handleGoToGame}
				/>
			<View style ={Styles.buttonsBlock}>
				<Button
					title="Compartir LobbyID"
					color="grey"
					onPress={onSharePress}
				/>
				< Button 
					 onPress={() => Linking.openURL('http://s3.amazonaws.com/cah/CAH_Rules.pdf')}
					 color='grey'
    				title = 'Instrucciones'
				/> 
			</View>
		</View>
		</View>
	)
}
