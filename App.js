import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import GoalItem from "./app/screens/GoalItem";
import GoalInput from "./app/screens/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const handleAddGoal = (addedGoal) => {
    setCourseGoals((currentGoals) => {
      return [
        ...currentGoals,
        { id: Math.random().toString(), value: addedGoal },
      ];
    });
  };

  return (
    <View style={styles.container}>
      <GoalInput handleAddGoal={handleAddGoal} />
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
