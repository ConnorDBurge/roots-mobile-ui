import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ThemeProvider } from "./src/providers";
import { TheApp } from "./src";

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <TheApp />
        <StatusBar style="inverted" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
