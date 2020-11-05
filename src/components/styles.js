import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
		padding: 8,
		//fontFamily: 'Helvetica',
	},
	spacer: {
		minHeight: 40,
	},
	whiteBg: {
		backgroundColor: 'white',
	},
	blackBg: {
		backgroundColor: 'black',
	},
	greyBg: {
		backgroundColor: '#302c2c',
	},
	whiteText: {
		color: '#ffff',
		//fontFamily: 'Roboto',
	},
	blackText: {
		color: '#0000',
		//fontFamily: 'Roboto',
	},
	greyText: {
		color: '#828282',
		//fontFamily: 'Roboto',
	},
	mainText: {
		//fontFamily: 'Roboto',
		letterSpacing: 1,
		fontSize: 40,
		fontWeight: 'bold',
	},
	importantText: {
		//fontFamily: 'Roboto',
		letterSpacing: 1,
		fontSize: 20,
	},
	titleLayoutContainer: {
		flex: 0.6,
		marginBottom: '10%',
		flexDirection: 'row',
		alignItems: 'center',
	},
	logoContainer: {
		marginTop: '10%',
	},
	nameTitleContainer: {
		marginTop: '30%',
	},
	logoImage: {},
	newGameInfoContainer: {
		//alignItems: 'center',
		justifyContent: 'center',
		flex: 0.25,
		marginBottom: '40%',
	},
	input: {
		backgroundColor: '#ffff',
		height: 50,
		borderColor: '#232323',
		borderWidth: 2,
		borderRadius: 6,
		paddingLeft: 12,
		marginLeft: '20%',
		marginEnd: '20%',
		marginBottom: '5%',
		marginTop: '5%',
		justifyContent: 'center',
	},
	divider: {
		height: 1,
		backgroundColor: 'grey',
		marginLeft: '20%',
		marginRight: '20%',
	},
	buttonContainer: {
		alignItems: 'center',
		flex: 0.15,
		marginBottom: '5%',
		justifyContent: 'space-between',
	},
	joinGameBtn: {
		display: 'flex',
		marginTop: '20%',
		borderColor: 'green',
	},
	titleLobbyContainer: {
		flex: 0.3,
		margin: '10%',
		marginTop: '20%',
	},
	playersContainer: {
		flex: 0.6,
		marginLeft: '10%',
		marginEnd: '10%',
	},
	blackCardContainer: {
		flex: 0.1,
		margin: '10%',
		marginBottom: 80,
	},
	whiteCardsContainer: {
		flex: 0.7,
		marginLeft: '10%',
		marginRight: '10%',
		marginBottom: '5%',
		marginTop: 20,
	},
	header: {
		flex: 0.1,
		padding: 20,
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingStart: '0%',
		backgroundColor: 'black',
		marginLeft: '10%',
		marginRight: '10%',
		alignItems: 'center',
	},
	infoHeader: {
		flexDirection: 'row',
	},
	card: {
		padding: 20,
		alignContent: 'center',
		marginVertical: 8,
		height: 70,
		borderRadius: 6,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.5,
		shadowRadius: 5,
		elevation: 5,
	},
	blackCard: {
		padding: 20,
		height: 100,
		borderRadius: 6,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.5,
		shadowRadius: 5,
		elevation: 5,
		backgroundColor: 'black',
	},
	bodyGame: {
		backgroundColor: '#302c2c',
		padding: '0%',
		flex: 1,
	},

	// : {},
})

export default Styles
