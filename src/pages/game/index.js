import React, { useState, useContext} from 'react'
import {
	SafeAreaView,
	Button,
	Text,
	View,
	FlatList,
} from 'react-native'
import Styles from '../../components/styles'
import Card from '../../components/card'
import Header from '../../components/header'
import SocketContext from '../../global/context/index'
import { getWhiteCardsPlayer} from '../../../../../cardsback/backend-cardsagainst/utils/cards'


const listWhite = getWhiteCardsPlayer();

export default function Game({ navigation }) {
	const context = useContext(SocketContext);
	const [selectedId, setSelectedId] = useState(null)
	const [round, setRound] = useState(0)
	const [turn, setTurn] = useState(0)
	const [score, setScore] = useState(0)
	const roomId = context.roomId;
	console.log('desde game', roomId)

	const renderItem = ({ item }) => {
		const backgroundColor = item.id === selectedId ? 'grey' : '#ffff'
		return (
			<Card
				item={item}
				title={item.content}
				onPress={() => setSelectedId(item.id)}
				style={{ backgroundColor }}
			/>
		)
	}

	return (
		<SafeAreaView style={Styles.container}>
			<Header round={round} score={score} />
			<View style={Styles.bodyGame}>
				<View style={Styles.blackCardContainer}>
					<View style={[Styles.blackCard, Styles.blackBg]}>
						<Text style={Styles.whiteText}>Carta negra</Text>
					</View>
				</View>
				<View style={Styles.divider} />
				<View style={Styles.whiteCardsContainer}>
					<FlatList
						style={Styles.cardContainer}
						data={listWhite}
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
		</SafeAreaView>
	)
}
