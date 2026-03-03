import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";

export default function WelcomePage() {
    const router = useRouter();

    return (
        <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 24,
                paddingVertical: 40,
                backgroundColor: "#fff",
            }}
        >
            {/* Logo */}
            <Image
                source={require("../assets/images/Green and White Plants Organic Logo.png")}
                style={{ width: 200, height: 200, marginBottom: 5}}
                resizeMode="contain"
            />

            {/* Welcome Text */}

            <Text className="text-gray-600 mb-8 text-center opacity-40">
                Manage your system easily and monitor all sensors in real-time.
            </Text>

            {/* Login Button */}
            <Pressable
                onPress={() => router.push("/auth/login")}
                className="w-full bg-primary py-3 rounded-xl mb-4"
            >
                <Text className="text-white text-center font-semibold">Login</Text>
            </Pressable>

            {/* Signup Button */}
            <Pressable
                onPress={() => router.push("/auth/signup")}
                className="w-full border border-primary py-3 rounded-xl"
            >
                <Text className="text-primary text-center font-semibold">Sign Up</Text>
            </Pressable>
        </ScrollView>
    );
}
