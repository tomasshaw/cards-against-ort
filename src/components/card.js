import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Styles from './styles'

const Card = ({ item, onPress, style }) => (
	<TouchableOpacity onPress={onPress} style={[Styles.card, style]}>
		<Text>{item.content}</Text>
	</TouchableOpacity>
)

export default Card
