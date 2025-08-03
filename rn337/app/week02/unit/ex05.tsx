// Ex5
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ height: 100, flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: 'turquoise' }} />
        <View style={{ flex: 1, backgroundColor: 'purple' }} />
      </View>
    </View>
  );
}
