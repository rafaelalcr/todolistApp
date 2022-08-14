import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RoundedCheckbox } from "react-native-rounded-checkbox";

const ListItems = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  const decorationTextHandler = () => {
    setIsSelected((current) => !current);
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
      >
        {props.text}
      </Text>
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
