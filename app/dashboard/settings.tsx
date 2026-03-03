import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Individual Setting Item Component
const SettingItem = ({ icon, title, subtitle, route }: any) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => route && router.push(route)}
      className="flex-row items-center justify-between py-4 border-b border-gray-200"
    >
      <View className="flex-row items-center">
        {/* ICON with spacing */}
        <Ionicons 
          name={icon} 
          size={22} 
          color="#2e6617" 
          style={{ marginRight: 14 }} 
        />

        <View>
          <Text className="text-base font-semibold text-gray-800">
            {title}
          </Text>
          {subtitle && (
            <Text className="text-sm text-gray-500 mt-1">
              {subtitle}
            </Text>
          )}
        </View>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#999" />
    </TouchableOpacity>
  );
};

export default function Settings() {
  return (
    <ScrollView className="flex-1 bg-white px-5 pt-8">

      {/* HEADER */}
      <Text className="text-2xl font-bold text-primary mb-6">
        ⚙ EVERFRESH Settings
      </Text>

      {/* ACCOUNT SECTION */}
      <Text className="text-sm text-gray-400 mb-2">ACCOUNT</Text>
      <SettingItem
        icon="person-outline"
        title="Profile Information"
        subtitle="Name, role, phone number"
        route="/settings/profile"
      />
      <SettingItem
        icon="lock-closed-outline"
        title="Security"
        subtitle="PIN, fingerprint & face ID"
        route="/settings/security"
      />
      <SettingItem
        icon="log-out-outline"
        title="Logout"
        subtitle="Sign out from all devices"
        route="/settings/logout"
      />

      {/* CONTAINER SECTION */}
      <Text className="text-sm text-gray-400 mt-6 mb-2">CONTAINER</Text>
      <SettingItem
        icon="cube-outline"
        title="Container Settings"
        subtitle="Location, type, configuration"
        route="/settings/container"
      />
      <SettingItem
        icon="thermometer-outline"
        title="Climate Profiles"
        subtitle="Maize, Beans, Rice, Tomatoes, Milk"
        route="/settings/climate"
      />
      <SettingItem
        icon="hardware-chip-outline"
        title="Sensor Calibration"
        subtitle="Temperature, humidity, oxygen levels"
        route="/settings/sensors"
      />

      {/* NOTIFICATIONS */}
      <Text className="text-sm text-gray-400 mt-6 mb-2">NOTIFICATIONS</Text>
      <SettingItem
        icon="notifications-outline"
        title="Alert Preferences"
        subtitle="Push, SMS, critical alerts"
        route="/settings/alerts"
      />

      {/* ANALYTICS */}
      <Text className="text-sm text-gray-400 mt-6 mb-2">ANALYTICS</Text>
      <SettingItem
        icon="bar-chart-outline"
        title="Reports & Data"
        subtitle="View metrics, loss statistics, export CSV"
        route="/settings/analytics"
      />

      {/* POWER & SYSTEM */}
      <Text className="text-sm text-gray-400 mt-6 mb-2">POWER & SYSTEM</Text>
      <SettingItem
        icon="battery-charging-outline"
        title="Power Management"
        subtitle="Battery, solar, UPS status"
        route="/settings/power"
      />
      <SettingItem
        icon="settings-outline"
        title="Advanced"
        subtitle="Firmware, system logs, diagnostics"
        route="/settings/advanced"
      />

      {/* SPACING */}
      <View className="h-10" />
    </ScrollView>
  );
}