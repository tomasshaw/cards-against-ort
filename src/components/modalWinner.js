import React from "react";
import {
  Modal,
  Text,
  View
} from "react-native";
import Styles from './styles'

const ModalWinner = ({winner, visible, navigateToHome}) => {
   
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={navigateToHome}
            >
                <View style={Styles.modalView}>
                    <Text style={Styles.modalText}> The game is over! The winner is </Text><Text style={[Styles.mainText, Styles.whiteTe]}>{winner}</Text>
                </View>
            </Modal>
        </View>
    )
};

export default ModalWinner