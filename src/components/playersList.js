import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import Styles from './styles'

const renderItem = ({ item }) => {
	return (
		<ListItem key={i} containerStyle={Styles.blackBg}>
			<ListItem.Title>
				<Text style={[Styles.importantText, Styles.greyText]}>
					Jugador {i + 1}:
				</Text>
			</ListItem.Title>
			<ListItem.Subtitle>
				<Text style={[Styles.importantText, Styles.whiteText]}>
					{item.name}
				</Text>
			</ListItem.Subtitle>
		</ListItem>
	)
}

const PlayersList = ({ playersList }) => {
	return (
		<View>
			<FlatList data={playersList} renderItem={renderItem} />
		</View>
	)
}

export default PlayersList
