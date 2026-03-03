import { View, Text, ScrollView } from "react-native";

export default function PowerManagement() {
  const systems = [
    { name: "Battery Level", value: "85%" },
    { name: "Solar Status", value: "Active" },
    { name: "UPS Backup", value: "72h capacity" },
  ];

  return (
    <ScrollView className="flex-1 bg-white px-5 pt-8">
      <Text className="text-2xl font-bold text-primary mb-6">Power Management</Text>

      {systems.map((item, idx) => (
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