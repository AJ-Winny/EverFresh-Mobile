import { ScrollView, Text, View } from "react-native";
import SensorCard from "../../components/SensorCard";

export default function DashboardHome() {
  // TODO: replace hard‑coded values with real data from context or API
  return (
    <ScrollView
      className="flex-1 bg-white px-4 pt-6 pb-20"
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Text className="text-3xl font-bold text-primary mb-2">
        Welcome back!
      </Text>
      <Text className="text-base text-gray-600 mb-6">
        Here's the current status of your storage system.
      </Text>

      <View className="flex-row flex-wrap justify-between mb-4">
        <SensorCard label="Temperature" value="18°C" />
        <SensorCard label="Humidity" value="55%" />
        <SensorCard label="Oxygen" value="20.5%" />
        <SensorCard label="Battery" value="80%" />
      </View>

      <Text className="text-xl font-semibold text-primary mb-2">
        Quick stats
      </Text>
      <View className="flex-row flex-wrap justify-between mb-6">
        <SensorCard label="Batches" value="12" />
        <SensorCard label="Alerts" value="3" />
      </View>

      {/* placeholder for future chart or analytics component */}
      <View className="h-48 bg-gray-100 rounded-xl justify-center items-center">
        <Text className="text-gray-400">Chart coming soon</Text>
      </View>
    </ScrollView>
  );
}
