import { useState } from "react";
import { ScrollView, Text, TextInput, Pressable, View, Alert } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function AddBatch() {
  const router = useRouter();

  // Form state
  const [crop, setCrop] = useState("");
  const [profile, setProfile] = useState("");
  const [entered, setEntered] = useState("");
  const [expiry, setExpiry] = useState("");
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [oxygen, setOxygen] = useState("");

  const handleSave = () => {
    if (!crop || !profile || !entered || !expiry || !temp || !humidity || !oxygen) {
      Alert.alert("Error", "Please fill all fields before saving.");
      return;
    }

    // Normally here you'd send the data to backend or context
    const newBatch = {
      id: Date.now().toString(),
      crop,
      profile,
      entered,
      expiry,
      temp: Number(temp),
      humidity: Number(humidity),
      oxygen: Number(oxygen),
      status: "Good", // default
    };

    console.log("New Batch Added:", newBatch);
    Alert.alert("Success", `${crop} batch added successfully!`);

    router.back(); // go back to batches list
  };

  return (
    <ScrollView className="flex-1 bg-gray-50 px-4 pt-6 pb-20">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Add New Batch</Text>

      {/* Crop Name */}
      <Text className="text-gray-600 mb-1">Crop Name</Text>
      <TextInput
        className="bg-white px-4 py-3 rounded-xl mb-4 border border-gray-300"
        placeholder="e.g., Maize"
        value={crop}
        onChangeText={setCrop}
      />

      {/* Profile */}
      <Text className="text-gray-600 mb-1">Profile / Type</Text>
      <TextInput
        className="bg-white px-4 py-3 rounded-xl mb-4 border border-gray-300"
        placeholder="e.g., Seed, Grain, Vegetable"
        value={profile}
        onChangeText={setProfile}
      />

      {/* Entry Date */}
      <Text className="text-gray-600 mb-1">Entry Date</Text>
      <TextInput
        className="bg-white px-4 py-3 rounded-xl mb-4 border border-gray-300"
        placeholder="YYYY-MM-DD"
        value={entered}
        onChangeText={setEntered}
      />

      {/* Expiry Date */}
      <Text className="text-gray-600 mb-1">Expiry Date</Text>
      <TextInput
        className="bg-white px-4 py-3 rounded-xl mb-4 border border-gray-300"
        placeholder="YYYY-MM-DD"
        value={expiry}
        onChangeText={setExpiry}
      />

      {/* Temperature */}
      <Text className="text-gray-600 mb-1">Temperature (°C)</Text>
      <TextInput
        className="bg-white px-4 py-3 rounded-xl mb-4 border border-gray-300"
        placeholder="e.g., 18"
        keyboardType="numeric"
        value={temp}
        onChangeText={setTemp}
      />

      {/* Humidity */}
      <Text className="text-gray-600 mb-1">Humidity (%)</Text>
      <TextInput
        className="bg-white px-4 py-3 rounded-xl mb-4 border border-gray-300"
        placeholder="e.g., 60"
        keyboardType="numeric"
        value={humidity}
        onChangeText={setHumidity}
      />

      {/* Oxygen */}
      <Text className="text-gray-600 mb-1">Oxygen Level (%)</Text>
      <TextInput
        className="bg-white px-4 py-3 rounded-xl mb-6 border border-gray-300"
        placeholder="e.g., 21"
        keyboardType="numeric"
        value={oxygen}
        onChangeText={setOxygen}
      />

      {/* Save Button */}
      <Pressable
        onPress={handleSave}
        className="bg-primary py-2 rounded-xl flex-row justify-center items-center"
      >
        <Ionicons name="checkmark-circle-outline" size={20} color="white" />
        <Text className="text-white font-semibold ml-2 text-lg">Save Batch</Text>
      </Pressable>
    </ScrollView>
  );
}