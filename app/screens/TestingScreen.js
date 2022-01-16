import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

function TestingScreen(props) {
  const [entredGoal, setEntredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const handleGoalInput = (entredText) => {
    setEntredGoal(entredText);
  };

  const handleAddGoal = () => {
    setCourseGoals((currentGoals) => {
      return [
        ...currentGoals,
        { id: Math.random().toString(), value: entredGoal },
      ];
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.userActionContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={handleGoalInput}
        />
        <Button title="Add" onPress={handleAddGoal} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => {
          return (
            <View style={styles.listItems}>
              <Text>{itemData.item.value}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
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
  listItems: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "orange",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TestingScreen;
