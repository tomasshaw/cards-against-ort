import React, { useState } from 'react'
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

const listWhite = [
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
	const [selectedId, setSelectedId] = useState(null)
	const [round, setRound] = useState(0)
	const [score, setScore] = useState(0)

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
					<Button
						title="Go back"
						onPress={() => navigation.goBack()}
					/>
				</View>
			</View>
		</SafeAreaView>
	)
}
