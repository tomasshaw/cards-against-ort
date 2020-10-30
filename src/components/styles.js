import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
	flex: 1,
    backgroundColor: 'black',
    // Lighter gradient - for higher Z-indexes
    // backgroundColor: '#3D3D3D',
  },
  navbar: {
	flex: 0.2,
	backgroundColor: 'black',
	justifyContent:'space-between',
	alignItems:'baseline',
	flexDirection: 'row',
	paddingStart: '0%',
  },
  spacer: {
    minHeight: 70,
  },
  whiteBg: {
	backgroundColor:'white',
  },
  blackBg: {
	backgroundColor:'black',
  },
  whiteText: {
	color: '#ffff',
	fontFamily: 'Helvetica',
  },
  blackText: {
	color: '#0000',
	fontFamily: 'Helvetica',
  },
  greyText: {
	color: '#828282',
	fontFamily: 'Helvetica',
  },
  titleLayoutContainer: {
    flex: 0.6,
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-around',
  },
  logoContainer: {
	marginTop: '10%',
},
  nameTitleContainer: {
	marginTop: '30%',
},
  mainText: {
    letterSpacing: 1,
	fontSize: 40,
  },
  importantText: {
	fontFamily: 'Helvetica',
    letterSpacing: 1,
	fontSize: 20,
  },
  	logoImage: { 
	},
 
	input: {
		backgroundColor: '#ffff',
		width: 200, 
		height: 40,
		borderColor: '#232323',
		borderWidth: 2,
		borderRadius: 6,
		paddingLeft: 12,
	},

  divider: {
    borderColor: '#AAAAAA',
	borderStyle: 'solid',
	borderWidth: 0.5,
    marginTop: '5%',
	marginBottom: '5%',
	display: 'flex',
	
  },
  joinGameBtn: {
	display: 'flex',
	marginTop: '20%',
	borderColor: 'green',
  },
  newGameInfoContainer: {
	alignItems: 'center',
	display: 'flex',
	flex: 0.4,
	marginBottom: '30%',
  },
  titleLobbyContainer: {
	display: 'flex',
	flex: 0.3,
	marginTop: '20%',
	marginLeft: '10%',
	marginBottom: '20%',
  },
  playersContainer: {
	//alignItems: 'center',
	display: 'flex',
	flex: 0.5,
	marginLeft: '10%',
	marginEnd: '10%',
  },
  blackCardContainer: {
	flex: 0.2,

  },
  whiteCardsContainer: {
	flex: 0.3,
  },
  cardContainer: {
	margin: '10%',
  },
  card: {
	height: '100%',
	width: '100%',
	display: 'flex',
	borderRadius: 6,
	shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,  
    elevation: 5
  },
  bodyGame: {
	backgroundColor:'#121212',
	padding: '0%',
	flex: 1,
  },

  // : {},
});

export default Styles;
