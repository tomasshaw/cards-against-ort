import React from "react";
import { Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import Style from './styles'

const Players = ({ roomPlayers }) => {
  return (
    <View style={Styles.playersContainer}>
		{roomPlayers.map((item, i) => (
        < ListItem key={i} containerStyle={Styles.blackBg}>
			<ListItem.Title>
				<Text style={[Styles.importantText, Styles.greyText]}>
					Jugador {i + 1}:
			    </Text>
			</ListItem.Title>
			<ListItem.Subtitle>
				<Text style={[Styles.importantText, Styles.whiteText]}>
					{item.nameP}
				</Text>
			</ListItem.Subtitle>
					</ListItem>
				))};
	</View>
  )}


export default Players;