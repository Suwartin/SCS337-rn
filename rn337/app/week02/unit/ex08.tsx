// Ex8
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-start' }}>
      <View style={{ width: 100, height: 100 }}>
        <View style={{ flex: 1, backgroundColor: 'turquoise' }} />
        <View style={{ flex: 1, backgroundColor: 'purple' }} />
      </View>
    </View>
  );
}
