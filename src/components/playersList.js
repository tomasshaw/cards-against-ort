import React from 'react'
import { Text, View, FlatList } from 'react-native'
import Styles from './styles'

const PlayersList = ({ playersList }) => {
	return (
		<View>
			<FlatList
				data={playersList}
				renderItem={({ item }) => (
					<Text style={[Styles.importantText, Styles.whiteText]}>
						{`Player: ${item.name}`}
					</Text>
				)}
				keyExtractor={item => item.id}
			/>
		</View>
	)
}

export default PlayersList
