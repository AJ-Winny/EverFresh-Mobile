import { View, Text, TextInput, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
    const router = useRouter();

    return (
        <View className="flex-1 justify-center px-6 bg-white">
            <Text className="text-2xl font-bold text-primary mb-6 text-center">
                Welcome Back
            </Text>

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
                    Login
                </Text>
            </Pressable>

            <Pressable
                onPress={() => router.push("/auth/signup")}
                className="mt-4"
            >
                <Text className="text-center text-gray-600">
                    Don’t have an account?{" "}
                    <Text className="text-primary font-semibold">Sign Up</Text>
                </Text>
            </Pressable>
        </View>
    );
}
