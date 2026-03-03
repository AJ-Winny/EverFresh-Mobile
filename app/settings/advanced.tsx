import { View, Text, ScrollView } from "react-native";

export default function AdvancedSettings() {
  const options = [
    { name: "Firmware Version", value: "v1.2.3" },
    { name: "System Logs", value: "View last 7 days" },
    { name: "Developer Mode", value: "Enabled" },
  ];

  return (
    <ScrollView className="flex-1 bg-white px-5 pt-8">
      <Text className="text-2xl font-bold text-primary mb-6">Advanced</Text>

      {options.map((item, idx) => (
        <View
          key={idx}
          className="bg-gray-50 p-4 rounded-xl mb-4 flex-row justify-between"
        >
          <Text className="text-gray-800 font-semibold">{item.name}</Text>
          <Text className="text-gray-600 font-medium">{item.value}</Text>
        </View>
      ))}
    </ScrollView>
  );
}