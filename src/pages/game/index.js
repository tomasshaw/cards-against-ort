import React, { useState, useEffect, useContext } from 'react'
import { Button, Text, View, FlatList } from 'react-native'
import Styles from '../../components/styles'
import Card from '../../components/card'
import Header from '../../components/header'
import SocketContext from '../../global/context/index'
import Modal from '../../components/modalWinner'
import RoleContainer from '../../components/roleContainer'

// const mockWhiteCards = [
// 	{ id: '1', msg: 'Respuesta graciosa 1' },
// 	{ id: '2', msg: 'Respuesta graciosa 2' },
// 	{ id: '3', msg: 'Respuesta graciosa 3' },
// 	{ id: '4', msg: 'Respuesta graciosa 4' },
// 	{ id: '5', msg: 'Respuesta graciosa 5' },
// 	{ id: '6', msg: 'Respuesta graciosa 6' },
// 	{ id: '7', msg: 'Respuesta graciosa 7' },
// 	{ id: '8', msg: 'Respuesta graciosa 8' },
// ]

export default function Game({ navigation, route }) {
	const socket = useContext(SocketContext)
	const [selectedId, setSelectedId] = useState('')
	const { room } = route.params
	const [userStatus, setUserStatus] = useState({
		points: 0,
		isZar: false,
	})
	const {points, isZar } = userStatus
	const [whiteCards, setWhiteCards] = useState([])
	const [blackCard, setBlackCard] = useState({})
	const [modalVisible, setModalVisible] = useState(false)
	const [winner, setWinner] = useState('')



	// useEffect(() => {
	// 	socket.emit('round_finished', room)
	// }, [])



	useEffect(() => {
		socket.on('user_status', newUserStatus => {
			console.log('newUserStatus', newUserStatus)
			setUserStatus(newUserStatus)
		})
		socket.on('next_black_card', black => {
			setBlackCard(black)
		})
		socket.on('next_card_array', whiteArray => {
			setWhiteCards(whiteArray)
		})
		socket.on('get_winner', room => {
			setWinner(room.winner)
		})
		socket.on('new_round', () => {
			room.round = room.round + 1
			socket.emit('get_next_round_status', room)
		})
	}, [])

	useEffect(() => {
		setModalVisible(winner !== '')
	}, [winner])


	const renderItem = ({ item }) => {
		const backgroundColor = item.id === selectedId ? 'grey' : '#ffff'
		return (
			<Card
				item={item}
				onPress={() => setSelectedId(item.id)}
				style={{ backgroundColor }}
			/>
		)
	}

	const renderModal = () => {
		return (
			<Modal
				winner={winner}
				visible={modalVisible}
				navigateToHome={() => handleGoToHome()}
			/>
		)
	}

	const handlePlayCard = () => {
		socket.emit('play_card', selectedId)
	}

	const handleGoToHome = () => {
		socket.emit('disconnect')
		navigation.navigate('Home')
	}

	return (
		<View style={Styles.container}>
			<Header round={room.round} points={points} />
			<View style={Styles.bodyGame}>
				{/* <View style={Styles.modal}>{renderModal()}</View> */}
				<View style={Styles.blackCardContainer}>
					<View style={[Styles.blackCard, Styles.blackBg]}>
						<Text style={Styles.whiteText}>{blackCard.content}</Text>
					</View>
				</View>
				<RoleContainer role={isZar ? 'Zar' : 'Player'} />
				<View style={Styles.whiteCardsContainer}>
					<FlatList
						style={Styles.cardContainer}
						data={whiteCards}
						renderItem={renderItem}
						keyExtractor={item => item.id.toString()}
						extraData={selectedId}
					/>
				</View>
				<View style={Styles.buttonContainer}>
					<Button
						title="Submit"
						color="grey"
						onPress={handlePlayCard}
						style={Styles.button}
					/>
				</View>
			</View>
		</View>
	)
}
