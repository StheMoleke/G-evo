import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("WelcomeScreen");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>G-evo</Text>
      <Text style={styles.tagline}>Discover. Connect. Celebrate.</Text>
      <ActivityIndicator size="large" color="#007AFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 10,
  },
  tagline: {
    fontSize: 18,
    color: "#555",
    marginBottom: 20,
  },
});
