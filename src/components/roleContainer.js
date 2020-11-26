import React from 'react'
import { Text, View } from 'react-native'
import Styles from './styles'

const RoleContainer = ({ role }) => {
	console.log(role)
	return (
		<View style={Styles.roleContainer}>
			<View style={Styles.partialDivider} />
			<Text style={Styles.whiteText}> {role} </Text>
			<View style={Styles.partialDivider} />
		</View>
	)
}

export default RoleContainer
