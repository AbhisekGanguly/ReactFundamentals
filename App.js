import React from "react";
import { StyleSheet, Text } from "react-native";

const App = () => {
  const getFullName = (firstName, secondName, lastName) => {
    return firstName + " " + secondName + " " + lastName;
  };

  return (
    <Text>
      Hello, I'm your cat, my name is {getFullName("Ponky", "Meaw", "Ganguly")}.
    </Text>
  );
};

export default App;
