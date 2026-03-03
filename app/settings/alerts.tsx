import { View, Text, ScrollView, Switch } from "react-native";
import { useState } from "react";

export default function AlertPreferences() {
  const [push, setPush] = useState(true);
  const [sms, setSms] = useState(true);
  const [critical, setCritical] = useState(true);

  return (
    <ScrollView className="flex-1 bg-white px-5 pt-8">
      <Text className="text-2xl font-bold text-primary mb-6">Alert Preferences</Text>

      <View className="bg-gray-50 p-4 rounded-xl mb-4 flex-row justify-between items-center">
        <Text className="text-gray-800 font-semibold">Push Notifications</Text>
        <Switch value={push} onValueChange={setPush} />
      </View>

      <View className="bg-gray-50 p-4 rounded-xl mb-4 flex-row justify-between items-center">
        <Text className="text-gray-800 font-semibold">SMS Notifications</Text>
        <Switch value={sms} onValueChange={setSms} />
      </View>

      <View className="bg-gray-50 p-4 rounded-xl mb-4 flex-row justify-between items-center">
        <Text className="text-gray-800 font-semibold">Critical Alerts Only</Text>
        <Switch value={critical} onValueChange={setCritical} />
      </View>
    </ScrollView>
  );
}