import { Stack } from "expo-router";
import "./globals.css";
import "./i18n";

export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="auth/login" />
            <Stack.Screen name="auth/signup" />
            <Stack.Screen name="dashboard" />
        </Stack>
    );
}
