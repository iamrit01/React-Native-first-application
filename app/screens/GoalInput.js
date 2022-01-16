import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

function GoalInput(props) {
  const [entredGoal, setEntredGoal] = useState("");

  const handleGoalInput = (entredText) => {
    setEntredGoal(entredText);
  };

  return (
    <View style={styles.userActionContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={handleGoalInput}
      />
      <Button
        title="Add"
        onPress={props.handleAddGoal.bind(this, entredGoal)}
      />
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
