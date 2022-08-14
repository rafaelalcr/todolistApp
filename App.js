import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AddModal from "./components/AddModal";
import ListItems from "./components/ListItems";

export default function App() {
  const [listItems, setListItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = (visible) => {
    setModalVisible(visible);
  };

  const addItemHandler = (item) => {
    if (item.length === 0) {
      return;
    }
    setListItems((currentItems) => [
      ...currentItems,
      { id: Math.random().toString(), value: item },
    ]);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>ToDo List</Text>
        <TouchableOpacity onPress={openModal}>
          <AntDesign name="pluscircle" size={30} color="#A35BDA" />
        </TouchableOpacity>
      </View>
      {modalVisible && (
        <AddModal
          visible={modalVisible}
          onAddItem={addItemHandler}
          onClose={closeModal}
        />
      )}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={listItems}
        renderItem={(itemData) => (
          <ListItems id={itemData.item.id} text={itemData.item.value} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 50,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    width: 300,
  },
});
