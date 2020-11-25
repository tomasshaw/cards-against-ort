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
                    <Text style={Styles.modalText}> {`¡El juego terminó! \n El ganador es ${winner}`}</Text>
                </View>
            </Modal>
        </View>
    )
};

export default ModalWinner