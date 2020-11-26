import React from 'react'
import { View } from 'react-native'
import Styles from './styles'
import Info from './info'

const header = ({ round, score }) => (
	<View style={Styles.header}>
		<Info name="Round" number={round} />
		<Info name="Points" number={score} />
	</View>
)

export default header
