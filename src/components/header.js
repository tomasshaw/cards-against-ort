import React from 'react'
import { View } from 'react-native'
import Styles from './styles'
import Info from './info'

const header = ({ round, score }) => (
	<View style={Styles.header}>
		<Info name="Ronda" number={round} />
		<Info name="Puntaje" number={score} />
	</View>
)

export default header
