import { View, Text, ScrollView } from "react-native";

export default function ProfileSettings() {
  return (
    <ScrollView className="flex-1 bg-white px-5 pt-8">
      <Text className="text-2xl font-bold text-primary mb-6">Profile Information</Text>

      <View className="bg-gray-50 p-4 rounded-xl mb-4">
        <Text className="text-gray-600 text-sm mb-1">Full Name</Text>
        <Text className="text-gray-800 font-semibold">Winny Darlen</Text>
      </View>

      <View className="bg-gray-50 p-4 rounded-xl mb-4">
        <Text className="text-gray-600 text-sm mb-1">Role</Text>
        <Text className="text-gray-800 font-semibold">Farmer / User</Text>
      </View>

      <View className="bg-gray-50 p-4 rounded-xl mb-4">
        <Text className="text-gray-600 text-sm mb-1">Phone Number</Text>
        <Text className="text-gray-800 font-semibold">+250 788 123 456</Text>
      </View>
    </ScrollView>
  );
}