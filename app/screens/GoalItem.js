import React from "react";
import { View, Text, StyleSheet } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.listItems}>
      <Text>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItems: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "orange",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
