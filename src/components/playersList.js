import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import Styles from './styles'

const renderItem = ({ item }) => {
	return (
		<ListItem containerStyle={Styles.blackBg}>
			<ListItem.Title>
				<Text style={[Styles.importantText, Styles.greyText]}>
					Player:
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
			<FlatList
				data={playersList}
				renderItem={renderItem}
				keyExtractor={player => player.id}
			/>
		</View>
	)
}

export default PlayersList
