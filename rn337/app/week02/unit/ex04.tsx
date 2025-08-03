// Ex4
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1 }} />
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, backgroundColor: "purple" }} />
          <View style={{ flex: 1, backgroundColor: "turquoise" }} />
        </View>
        <View style={{ flex: 1 }} />
      </View>
    </View>
  );
}
