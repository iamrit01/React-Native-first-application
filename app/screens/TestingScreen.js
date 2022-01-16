import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
} from "react-native";

function TestingScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.userActionContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} />
        <Button title="Add" />
      </View>
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
});

export default TestingScreen;
