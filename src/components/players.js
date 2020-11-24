import React from 'react'
import { Text, View } from 'react-native'
import { ListItem } from 'react-native-elements'
import Styles from './styles'

const Players = ({ playersList }) => {
	return (
		<View>
			{playersList.map((item, i) => (
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
			))}
			;
		</View>
	)
}

export default Players
