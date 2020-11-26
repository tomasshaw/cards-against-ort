import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Styles from './styles'

const card = ({ item, onPress, style }) => (
	<TouchableOpacity onPress={onPress} style={[Styles.card, style]}>
		<Text>{item.content}</Text>
	</TouchableOpacity>
)

export default card
