import { View, Text, TextInput, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function Signup() {
    const router = useRouter();

    return (
        <View className="flex-1 justify-center px-6 bg-white">
            <Text className="text-2xl font-bold text-primary mb-6 text-center">
                Create Account
            </Text>

            <TextInput
                placeholder="Full Name"
                className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
            />

            <TextInput
                placeholder="Email"
                className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
            />

            <TextInput
                placeholder="Password"
                secureTextEntry
                className="border border-gray-300 rounded-xl px-4 py-3 mb-6"
            />

            <Pressable
                onPress={() => router.replace("/dashboard")}
                className="bg-primary py-3 rounded-xl"
            >
                <Text className="text-white text-center text-lg font-semibold">
                    Sign Up
                </Text>
            </Pressable>
        </View>
    );
}
