import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		// Lighter gradient - for higher Z-indexes
		//backgroundColor: '#3D3D3D',
		backgroundColor: '#232323',
		alignItems: 'center',
		justifyContent: 'center',
	},
	spacer: {
		flex: 1,
		minHeight: '70px',
	},
	navbar: {
		flex: 1,
		backgroundColor: '#3D3D3D',
		alignItems: 'center',
		justifyContent: 'center',
	},
	white: {
		color: '#ffff',
	},
	whitebg: {
		backgroundColor: '#ffff',
	},
	black: {
		color: '#0000',
	},
	grey: {
		color: '#828282',
	},
	titleLayoutContainer: {
		marginTop: '16px',
		flex: 1,
		flexDirection: 'row',
	},
	logoContainer: {},
	nameTitleContainer: {},
	mainText: {
		fontFamily: 'Helvetica',
		letterSpacing: '1px',
		fontSize: '40px',
	},
	logoImage: { width: '50px', height: '50px' },
	divider: {
		borderColor: '#AAAAAA',
		borderStyle: 'solid',
		borderWidth: '1px',
		width: '100%',
		height: '1px',
		marginTop: '9px',
		marginBottom: '9px',
	},
	newGameBtn: {
		color: 'red',
	},
	joinGameBtn: {},
	newGameInfoContainer: {
		marginBottom: '16px',
	},
	//: {},
})

export default Styles
