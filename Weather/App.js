import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "tomato" }} />
      <View style={{ flex: 3, backgroundColor: "teal" }} />
      <View style={{ flex: 1, backgroundColor: "orange" }} />
    </View>
  );
}
