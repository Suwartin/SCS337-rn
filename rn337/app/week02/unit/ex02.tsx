// Ex2
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ flex: 1, backgroundColor: 'turquoise' }} />
      <View style={{ flex: 2 }} />
    </View>
  );
}
