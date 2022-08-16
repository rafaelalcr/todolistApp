import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RoundedCheckbox } from "react-native-rounded-checkbox";
import ChangeModal from "./ChangeModal";

const ListItems = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const decorationTextHandler = () => {
    setIsSelected((current) => !current);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = (visible) => {
    setModalVisible(visible);
  };

  const editItemHandler = (item) => {
    props.editItem(props.id, item);
    setModalVisible(false);
  };

  const deleteItemHandler = () => {
    props.deleteItem(props.id);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <RoundedCheckbox
        text={""}
        isChecked={false}
        checkedColor={"#A35BDA"}
        onPress={decorationTextHandler}
      />
      <Text
        style={[
          styles.label,
          { textDecorationLine: isSelected ? "line-through" : "none" },
        ]}
        onPress={openModal}
      >
        {props.text}
      </Text>
      {modalVisible && (
        <ChangeModal
          id={props.id}
          text={props.text}
          onEditItem={editItemHandler}
          onDeleteItem={deleteItemHandler}
          onClose={closeModal}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    margin: 10,
    fontSize: 18,
    width: 250,
  },
});

export default ListItems;
