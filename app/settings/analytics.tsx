import { View, Text, ScrollView } from "react-native";

export default function AnalyticsSettings() {
  return (
    <ScrollView className="flex-1 bg-white px-5 pt-8">
      <Text className="text-2xl font-bold text-primary mb-6">Reports & Data</Text>

      <View className="bg-gray-50 p-4 rounded-xl mb-4">
        <Text className="text-gray-800 font-semibold mb-1">Batch Loss Metrics</Text>
        <Text className="text-gray-600 text-sm">Maize: 70%, Beans: 65%, Rice: 60%, Potatoes: 55%</Text>
      </View>

      <View className="bg-gray-50 p-4 rounded-xl mb-4">
        <Text className="text-gray-800 font-semibold mb-1">Storage Insights</Text>
        <Text className="text-gray-600 text-sm">
          Average storage temperature stable at 18-20°C. Humidity maintained at 60-65%.
        </Text>
      </View>

      <View className="bg-gray-50 p-4 rounded-xl mb-4">
        <Text className="text-gray-800 font-semibold mb-1">Download Reports</Text>
        <Text className="text-gray-600 text-sm">Monthly CSV and PDF reports available</Text>
      </View>
    </ScrollView>
  );
}