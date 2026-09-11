import { Stack } from "expo-router";
import "@/global.css";

/** Renders the application's root navigation stack without headers. */
export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
