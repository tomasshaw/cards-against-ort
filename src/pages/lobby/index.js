import { StatusBar } from 'expo-status-bar'
import React, { useContext, useState, useEffect} from 'react'
import { SafeAreaView, Share, Button, Text, View } from 'react-native'
import Styles from '../../components/styles'
import { ListItem } from 'react-native-elements'
import SocketContext from '../../global/context/index'


export default function Lobby({ navigation, route }) {
	const socket = useContext(SocketContext);
	const [name, setName] = useState('')
	const [room, setRoom] = useState('')
	const {roomId} = route.params;
	//const {name} = route.params;
	const [listPlayers, setListPlayers] = useState([])
	//const player = getCurrentPlayer(socket)
	
	const onSharePress = () => Share.share(shareOptions)
		
	const shareOptions = {
		message:`Hola! Te estoy invitando a jugar a CAO. Unite a la sala ${room.id}`,
	}

	useEffect(() => {
		socket.on('updatePlayers', players => {
		  	setListPlayers(players);
		});
		socket.on('getPlayerName', name => {
			setName(name);
	  	});
	  	socket.on('getRoom', room => {
			setRoom(room)
		})
	});

	const isValidGame = () => {
		if (listPlayers.length > 0) {
			return true
		}
	}

	const handleGoToGame = () => {
		socket.emit('newRound', room.id)
		console.log('log desde lobby')
		navigation.navigate('Game')
	}


	return (
		<SafeAreaView style={Styles.container}>
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
					#{roomId}
				</Text>
			</View>

			<View style={Styles.playersContainer}>
				{listPlayers.map((player, i) => (
					<ListItem key={i} containerStyle={Styles.blackBg}>
						<ListItem.Title>
							<Text style={[Styles.importantText, Styles.greyText]}>
								Jugador {i + 1}:
							</Text>
						</ListItem.Title>
						<ListItem.Subtitle>
							<Text style={[Styles.importantText, Styles.whiteText]}>
								{name}
							</Text>
						</ListItem.Subtitle>
					</ListItem>
				))}
			</View>
			<View style={Styles.buttonContainer}>
				<Button
					title="Compartir LobbyID"
					color="grey"
					onPress={onSharePress}
				/>
				<Button
					title="Play now"
					disabled = { isValidGame() ? false : true}
					color= 'green'
					onPress={handleGoToGame}
				/>
			</View>
		</SafeAreaView>
	)
}
