import React from 'react'
import { View } from 'react-native'
import Styles from './styles'
import Info from './info'

const header = ({points}) => (
	<View style={Styles.header}>
		<Info name="Round" number={1} />
		<Info name="Points" number={points} />
	</View>
)

export default header
