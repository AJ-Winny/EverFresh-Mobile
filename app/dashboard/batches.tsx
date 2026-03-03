import { useRouter } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";

const mockBatches = [
  {
    id: "1",
    crop: "Maize",
    profile: "Seed",
    status: "Good",
    entered: "2026-02-20",
    expiry: "2026-08-20",
  },
  {
    id: "2",
    crop: "Beans",
    profile: "Grain",
    status: "Warning",
    entered: "2026-01-15",
    expiry: "2026-07-15",
  },
];

export default function Batches() {
  const router = useRouter();

  const renderBatch = ({ item }: any) => {
    // Status color
    const statusColor =
      item.status === "Good" ? "text-green-600" : "text-yellow-600";

    return (
      <View className="bg-gray-50 rounded-2xl p-5 mb-4 shadow-sm">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="font-bold text-lg text-primary">
            {item.crop} ({item.profile})
          </Text>
          <Text className={`${statusColor} font-semibold`}>{item.status}</Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-sm text-gray-500">
            Entered: {item.entered}
          </Text>
          <Text className="text-sm text-gray-500">
            Expiry: {item.expiry}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-white px-5 pt-6 pb-24">
      {/* HEADER */}
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-2xl font-bold text-primary">Stored Batches</Text>

        <Pressable
          onPress={() => router.push("../dashboard-add-batch")}
          className="bg-primary px-5 py-3 rounded-xl shadow-lg"
        >
          <Text className="text-white font-semibold">+ Add</Text>
        </Pressable>
      </View>

      {/* BATCH LIST */}
      <FlatList
        data={mockBatches}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <View className="mt-20 items-center">
            <Text className="text-gray-400 text-base">
              No batches stored yet.
            </Text>
          </View>
        )}
        renderItem={renderBatch}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}