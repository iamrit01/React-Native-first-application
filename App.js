import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import TestingScreen from "./app/screens/TestingScreen";
import GoalItem from "./app/screens/GoalItem";
import GoalInput from "./app/screens/GoalInput";

export default function App() {
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
      <GoalInput
        handleAddGoal={handleAddGoal}
        handleGoalInput={handleGoalInput}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
