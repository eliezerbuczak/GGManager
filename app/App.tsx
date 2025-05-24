import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import '../global.css';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <StatusBar style="auto" />
      <Text className="text-3xl font-bold underline text-blue-500">
        Hello world!
      </Text>
    </View>
  );
}
