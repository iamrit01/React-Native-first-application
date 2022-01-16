import React from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

function GoalInput(props) {
  return (
    <View style={styles.userActionContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={props.handleGoalInput}
      />
      <Button title="Add" onPress={props.handleAddGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  userActionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
export default GoalInput;
