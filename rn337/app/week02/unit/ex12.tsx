// Ex12
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ flex: 1, backgroundColor: 'purple' }} />
      <View style={{ flex: 1, backgroundColor: 'mediumseagreen' }} />
      <View style={{ flex: 1, backgroundColor: 'skyblue' }} />
    </View>
  );
}
