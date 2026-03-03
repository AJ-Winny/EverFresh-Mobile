import { View, Text } from "react-native";

export default function SensorCard({
                                       label,
                                       value,
                                   }: {
    label: string;
    value: string;
}) {
    return (
        <View className="w-[48%] bg-gray-100 rounded-xl p-4 mb-4">
            <Text className="text-gray-500 text-sm">{label}</Text>
            <Text className="text-xl font-bold text-primary mt-1">
                {value}
            </Text>
        </View>
    );
}
