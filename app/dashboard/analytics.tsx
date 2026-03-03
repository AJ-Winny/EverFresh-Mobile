import { ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const mockMetrics = {
  totalBatches: 9,
  good: 6,
  warning: 2,
  critical: 1,
  avgTemp: 18.5,
  avgHumidity: 60,
};

export default function Analytics() {
  return (
    <ScrollView
      className="flex-1 bg-gray-50 px-4 pt-6 pb-24"
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      {/* HEADER */}
      <Text className="text-2xl font-bold text-gray-800 mb-4">
        Analytics Dashboard
      </Text>

      {/* METRICS CARDS */}
      <View className="flex-row flex-wrap justify-between">
        {/* Total Batches */}
        <View className="bg-white rounded-2xl p-4 w-[48%] mb-4">
          <Text className="text-gray-500 text-sm">Total Batches</Text>
          <Text className="text-2xl font-bold text-primary mt-2">{mockMetrics.totalBatches}</Text>
        </View>

        {/* Good Batches */}
        <View className="bg-white rounded-2xl p-4 w-[48%] mb-4">
          <Text className="text-gray-500 text-sm">Good</Text>
          <Text className="text-2xl font-bold text-green-600 mt-2">{mockMetrics.good}</Text>
        </View>

        {/* Warning Batches */}
        <View className="bg-white rounded-2xl p-4 w-[48%] mb-4">
          <Text className="text-gray-500 text-sm">Warning</Text>
          <Text className="text-2xl font-bold text-yellow-500 mt-2">{mockMetrics.warning}</Text>
        </View>

        {/* Critical Batches */}
        <View className="bg-white rounded-2xl p-4 w-[48%] mb-4">
          <Text className="text-gray-500 text-sm">Critical</Text>
          <Text className="text-2xl font-bold text-red-600 mt-2">{mockMetrics.critical}</Text>
        </View>

        {/* Avg Temperature */}
        <View className="bg-white rounded-2xl p-4 w-[48%] mb-4">
          <Text className="text-gray-500 text-sm">Avg Temperature</Text>
          <Text className="text-2xl font-bold text-blue-600 mt-2">{mockMetrics.avgTemp}°C</Text>
        </View>

        {/* Avg Humidity */}
        <View className="bg-white rounded-2xl p-4 w-[48%] mb-4">
          <Text className="text-gray-500 text-sm">Avg Humidity</Text>
          <Text className="text-2xl font-bold text-blue-400 mt-2">{mockMetrics.avgHumidity}%</Text>
        </View>
      </View>

      {/* AI Insights */}
      <View className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl p-4 mt-4">
        <Text className="font-semibold text-blue-800 mb-2">
          <Ionicons name="bulb-outline" size={18} color="#1D4ED8" /> AI Insights
        </Text>
        <Text className="text-sm text-blue-700">
          66% of batches are in good condition. Keep monitoring warning batches closely. Temperature and humidity are stable, ensuring optimal storage. Critical batches need immediate attention.
        </Text>
      </View>

      {/* Batch Status Bars */}
      <View className="mt-6">
        <Text className="text-gray-700 font-semibold mb-2">Batch Status Overview</Text>
        
        {["Good", "Warning", "Critical"].map((status, idx) => {
          const colors = ["#22c55e", "#facc15", "#ef4444"];
          const values = [mockMetrics.good, mockMetrics.warning, mockMetrics.critical];
          const percent = (values[idx] / mockMetrics.totalBatches) * 100;
          return (
            <View key={status} className="mb-3">
              <Text className="text-gray-600">{status} ({values[idx]})</Text>
              <View className="bg-gray-200 h-3 rounded-full mt-1">
                <View className="h-3 rounded-full" style={{ width: `${percent}%`, backgroundColor: colors[idx] }} />
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}