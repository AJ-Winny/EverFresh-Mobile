// app/dashboard/_layout.tsx
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function DashboardLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "#2e6617" }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <Ionicons name="home" size={22} color={color} />,
                }}
            />
            <Tabs.Screen
                name="batches"
                options={{
                    title: "Batches",
                    tabBarIcon: ({ color }) => <Ionicons name="cube" size={22} color={color} />,
                }}
            />
            <Tabs.Screen
                name="analytics"
                options={{
                    title: "Analytics",
                    tabBarIcon: ({ color }) => <Ionicons name="bar-chart" size={22} color={color} />,
                }}
            />
            <Tabs.Screen
                name="alerts"
                options={{
                    title: "Alerts",
                    tabBarIcon: ({ color }) => <Ionicons name="alert" size={22} color={color} />,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color }) => <Ionicons name="settings" size={22} color={color} />,
                }}
            />
        </Tabs>
    );
}
