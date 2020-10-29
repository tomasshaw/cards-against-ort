import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
	flex: 1,
	flexDirection: "column",
    // Lighter gradient - for higher Z-indexes
    // backgroundColor: '#3D3D3D',
    backgroundColor: 'black',
    alignItems: 'center',
	justifyContent: 'center',
	
  },
  spacer: {
    minHeight: 70,
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
  black: {
    color: '#0000',
  },
  grey: {
    color: '#828282',
  },
  titleLayoutContainer: {
    flex: 3,
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
	marginTop: '10%',
	marginBottom: '10%',
  },
  logoContainer: {
	marginTop: '10%',
},
  nameTitleContainer: {
	marginTop: '30%',
},
  mainText: {
    fontFamily: 'Helvetica',
    letterSpacing: 1,
	fontSize: 40,
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
  newGameBtn: {
	color: 'red',
	marginTop: '10%',
  },
  joinGameBtn: {
	display: 'flex',
	marginTop: '10%',
	borderColor: 'green',

  },
  newGameInfoContainer: {
	flex: 2,
	marginBottom: '30%',
	display: 'flex',
  },
  // : {},
});

export default Styles;
