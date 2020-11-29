import React from "react";
import {
  Modal,
  Text,
  View,
  Button
} from "react-native";
import Styles from './styles'

const ModalWinner = ({winner, visible, navigateToHome}) => {
   
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}  
                visible={visible}
            >
                 <View style={Styles.modalView}>
                    <Text style={Styles.modalText}>The game is over! The winner is </Text>
                    <Text style={[Styles.mainText, Styles.whiteTe]}>{winner}</Text>
                </View>
                <Button
                    title="Go to home"
                    onPress={navigateToHome}
                    color='grey'
                />
            </Modal>
        </View>
    )
};

export default ModalWinner