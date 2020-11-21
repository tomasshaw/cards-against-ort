import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View
} from "react-native";
import Styles from './styles'

const ModalWinner = ({winner}) => {
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => navigation.navigate('Home')}
      >
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <Text style={Styles.modalText}> El ganador es {winner}!</Text>
          </View>
        </View>
      </Modal>
};

export default ModalWinner