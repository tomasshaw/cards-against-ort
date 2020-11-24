import React, { useState, useEffect, useContext } from 'react'
import {
	Button,
	Text,
	View,
	FlatList,
} from 'react-native'
import Styles from '../../components/styles'
import Card from '../../components/card'
import Header from '../../components/header'
import SocketContext from '../../global/context/index'
import Modal from '../../components/modalWinner'


const whiteCards = [
	{ id: '1', msg: 'Respuesta graciosa 1' },
	{ id: '2', msg: 'Respuesta graciosa 2' },
	{ id: '3', msg: 'Respuesta graciosa 3' },
	{ id: '4', msg: 'Respuesta graciosa 4' },
	{ id: '5', msg: 'Respuesta graciosa 5' },
	{ id: '6', msg: 'Respuesta graciosa 6' },
	{ id: '7', msg: 'Respuesta graciosa 7' },
	{ id: '8', msg: 'Respuesta graciosa 8' },
]

export default function Game({ navigation }) {
	const socket = useContext(SocketContext);
	const [selectedId, setSelectedId] = useState('')
	const [round, setRound] = useState(0)
	const [turn, setTurn] = useState(0)
	const [score, setScore] = useState(0)
	//const [whiteCards, setWhiteCards] = useState(whiteCards)
	const [modalVisible, setModalVisible] = useState(false);
	const [winner, setWinner] = useState('');

		
	useEffect(() => {
		socket.on('getWinner', room => {
			setWinner(room.winner)
			if(winner !== ''){
				setModalVisible(modalVisible);
			  }
		})
		return () => {
			socket.disconnect()
		}
	});


	const renderItem = ({item}) => {
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
				winner = { winner }
				visible = {modalVisible}
				navigateToHome= {() => navigateToHome()}
		  />
		)
	};
	return (
		<View style={Styles.container}>
			<Header round={round} score={score} />
			<View style={Styles.bodyGame}>
			<View style={Styles.modal}>{renderModal()}</View>
				<View style={Styles.blackCardContainer}>
					<View style={[Styles.blackCard, Styles.blackBg]}>
						<Text style={Styles.whiteText}>Carta negra</Text>
					</View>
				</View>
				<View style={Styles.divider} />
				<View style={Styles.whiteCardsContainer}>
					<FlatList
						style={Styles.cardContainer}
						data={whiteCards}
						renderItem={renderItem}
						keyExtractor={item => item.id}
						extraData={selectedId}
					/>
				</View>
				<View style={Styles.buttonContainer}>
					<Button
						title="Enviar"
						color="grey"
						onPress={() => setScore(score + 1)}
						style={Styles.button}
					/>
				</View>
			</View>
		</View>
	)
}
