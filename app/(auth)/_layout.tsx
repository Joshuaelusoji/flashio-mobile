import { Stack } from "expo-router";
import "@/global.css";

/** Renders the headerless navigation stack for authentication screens. */
export default function RootLayout() {
    return <Stack screenOptions={{ headerShown: false }} />;
}
