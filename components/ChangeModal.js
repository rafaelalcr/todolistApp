import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ChangeModal = (props) => {
  const [textInput, setTextInput] = useState(props.text);

  const textInputHandler = (text) => {
    setTextInput(text);
  };

  const editItemHandler = () => {
    props.onEditItem(textInput);
    setTextInput("");
  };

  const deleteItemHandler = () => {
    props.onDeleteItem();
  };

  const closeModal = () => {
    props.onClose(false);
  };

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={props.visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.buttonClose} onPress={closeModal}>
              <AntDesign name="closecircle" size={20} color="#A35BDA" />
            </TouchableOpacity>
            <TextInput
              style={styles.modalTextInput}
              value={textInput}
              onChangeText={textInputHandler}
            />
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.buttonEdit}
                onPress={editItemHandler}
              >
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonDelete}
                onPress={deleteItemHandler}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    marginTop: 300,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonEdit: {
    backgroundColor: "#A35BDA",
    width: 90,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginHorizontal: 10
  },
  buttonDelete: {
    backgroundColor: "#A35BDA",
    width: 90,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginHorizontal: 10
  },
  buttonClose: {
    margin: 20,
    right: 0,
    position: "absolute",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTextInput: {
    marginVertical: 18,
    textAlign: "center",
    width: 200,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#A35BDA",
  },
});

export default ChangeModal;
