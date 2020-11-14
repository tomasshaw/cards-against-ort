import React from 'react'
import { Text, View } from 'react-native'
import Styles from './styles'

const info = ({ name, number }) => (
	<View style={Styles.infoHeader}>
		<Text style={Styles.greyText}>
			{name}: {number}
		</Text>
	</View>
)

export default info
