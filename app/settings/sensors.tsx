import { View, Text, ScrollView } from "react-native";

export default function SensorCalibration() {
  const sensors = [
    { name: "Temperature Sensor", status: "Calibrated" },
    { name: "Humidity Sensor", status: "Calibrated" },
    { name: "Oxygen Sensor", status: "Pending" },
  ];

  return (
    <ScrollView className="flex-1 bg-white px-5 pt-8">
      <Text className="text-2xl font-bold text-primary mb-6">Sensor Calibration</Text>

      {sensors.map((sensor, idx) => (
        <View
          key={idx}
          className="bg-gray-50 p-4 rounded-xl mb-4 flex-row justify-between"
        >
          <Text className="text-gray-800 font-semibold">{sensor.name}</Text>
          <Text
            className={`${
              sensor.status === "Calibrated" ? "text-green-600" : "text-yellow-500"
            } font-semibold`}
          >
            {sensor.status}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}