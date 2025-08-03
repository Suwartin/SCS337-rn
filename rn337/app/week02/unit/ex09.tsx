// Ex9
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: 200, height: 200, flexDirection: 'row', flexWrap: 'wrap' }}>
        <View style={{ width: 100, height: 100, backgroundColor: 'turquoise' }} />
        <View style={{ width: 100, height: 100, backgroundColor: 'purple' }} />
        <View style={{ width: 100, height: 100, backgroundColor: 'purple' }} />
        <View style={{ width: 100, height: 100, backgroundColor: 'turquoise' }} />
      </View>
    </View>
  );
}
