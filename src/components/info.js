import React from 'react'
import { Text, View } from 'react-native'
import Styles from './styles'

const Info = ({ name, number }) => (
	<View style={Styles.infoHeader}>
		<Text style={Styles.greyText}>
			{name}: {number}
		</Text>
	</View>
)

export default Info
