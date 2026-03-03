import { View, Text, ScrollView } from "react-native";

export default function ClimateProfiles() {
  const crops = [
    { crop: "Maize", temp: "18°C", humidity: "60%" },
    { crop: "Beans", temp: "20°C", humidity: "65%" },
    { crop: "Rice", temp: "19°C", humidity: "62%" },
    { crop: "Tomatoes", temp: "16°C", humidity: "70%" },
  ];

  return (
    <ScrollView className="flex-1 bg-white px-5 pt-8">
      <Text className="text-2xl font-bold text-primary mb-6">Climate Profiles</Text>

      {crops.map((item, index) => (
        <View
          key={index}
          className="bg-gray-50 p-4 rounded-xl mb-4 flex-row justify-between"
        >
          <Text className="text-gray-800 font-semibold">{item.crop}</Text>
          <Text className="text-gray-600">
            {item.temp} / {item.humidity}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}