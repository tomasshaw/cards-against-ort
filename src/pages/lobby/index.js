import React, { useContext, useState, useEffect } from 'react'
import { Share, Button, Text, View, Linking } from 'react-native'
import Styles from '../../components/styles'
import Players from '../../components/playersList'
import SocketContext from '../../global/context/index'

export default function Lobby({ navigation, route }) {
	const socket = useContext(SocketContext)
	const { name } = route.params
	const [room, setRoom] = useState({})
	const [isValidGame, setIsValidGame] = useState(false)

	const onSharePress = () => Share.share(shareOptions)

	useEffect(() => {
		socket.on('update_room', room => {
			setRoom(room)
		})
		socket.on('play_room', room => {
			handleNavigate(room)
		})
	}, [])

	useEffect(() => {
		setIsValidGame(room?.players?.length > 2)
	}, [room])

	const shareOptions = {
		message: `Hola! Te estoy invitando a jugar a CAO. Unite a la sala ${room.id}`,
	}

	const handleNavigate = room => {
		socket.emit('next_round', room)
		navigation.navigate('Game', { room })
	}

	const handleGoToGame = () => {
		socket.emit('play_game', room)
	}

	return (
		<View style={Styles.container}>
			<View style={Styles.titleLobbyContainer}>
				<Text style={[Styles.whiteText, Styles.mainText]}>
					{`Hi ${name} !`}
					{'\n'}
				</Text>
				<Text style={[Styles.whiteText, Styles.importantText]}>
					Room
				</Text>
				<Text style={[Styles.greyText, Styles.importantText]}>
					#{room.id}
				</Text>
			</View>
			<View style={Styles.playersContainer}>
				<Players playersList={room.players} />
			</View>
			<View style={Styles.buttonContainer}>
				<Button
					title="Play now"
					disabled={!isValidGame}
					color="green"
					onPress={handleGoToGame}
				/>
			</View>
			<View style={Styles.buttonsBlock}>
				<Button
					title="Share Room ID"
					color="grey"
					onPress={onSharePress}
				/>
				<Button
					onPress={() =>
						Linking.openURL(
							'http://s3.amazonaws.com/cah/CAH_Rules.pdf',
						)
					}
					color="grey"
					title="Basic rules"
				/>
			</View>
		</View>
	)
}
