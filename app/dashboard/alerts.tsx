import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

interface AlertItem {
  id: string;
  level: "Info" | "Warning" | "Critical";
  message: string;
  timestamp?: string;
}

export default function Alerts() {
  const [alerts, setAlerts] = useState<AlertItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAlerts();
  }, []);

  const fetchAlerts = async () => {
    setLoading(true);
    try {
      // replace with real backend endpoint
      const res = await fetch("/api/alerts");
      if (res.ok) {
        const data: AlertItem[] = await res.json();
        setAlerts(data);
      } else {
        console.warn("Failed to load alerts", res.status);
      }
    } catch (err) {
      console.error("Error fetching alerts", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white px-4 pt-6 pb-20">
      <Text className="text-xl font-bold text-primary mb-4">Alerts</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#2e6617" />
      ) : (
        <FlatList
          data={alerts}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => (
            <Text className="text-gray-400 text-center mt-10">
              No alerts at the moment.
            </Text>
          )}
          renderItem={({ item }) => (
            <View
              className={`rounded-xl p-4 mb-3 ${
                item.level === "Critical"
                  ? "bg-red-100"
                  : item.level === "Warning"
                    ? "bg-yellow-100"
                    : "bg-blue-100"
              }`}
            >
              <Text className="font-semibold">{item.level}</Text>
              <Text className="text-gray-700">{item.message}</Text>
              {item.timestamp && (
                <Text className="text-xs text-gray-500 mt-1">
                  {new Date(item.timestamp).toLocaleString()}
                </Text>
              )}
            </View>
          )}
        />
      )}
    </View>
  );
}
