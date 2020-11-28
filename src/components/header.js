import React from 'react'
import { View } from 'react-native'
import Styles from './styles'
import Info from './info'

const header = ({round, points}) => (
	<View style={Styles.header}>
		<Info name="Round" number={round} />
		<Info name="Points" number={points} />
	</View>
)

export default header
