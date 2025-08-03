// Ex6
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ height: 200, width: 100 }}>
        <View style={{ flex: 1, backgroundColor: 'purple' }} />
        <View style={{ flex: 1, backgroundColor: 'turquoise' }} />
      </View>
    </View>
  );
}
