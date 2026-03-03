import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function Logout() {
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel" },
      { text: "Logout", onPress: () => router.replace("/auth/login") },
    ]);
  };

  return (
    <View className="flex-1 bg-white px-5 pt-8 justify-center items-center">
      <Text className="text-xl font-bold text-gray-800 mb-6">Logout</Text>
      <TouchableOpacity
        onPress={handleLogout}
        className="bg-red-500 px-6 py-3 rounded-xl"
      >
        <Text className="text-white font-semibold">Logout</Text>
      </TouchableOpacity>
    </View>
  );
}