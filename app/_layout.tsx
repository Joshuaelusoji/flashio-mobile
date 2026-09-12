import "@/global.css";
import {SplashScreen, Stack} from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

/** Renders the application's root navigation stack without headers. */
export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "sans-regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "sans-semibold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "sans-light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    "sans-medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "sans-extrabold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "sans-bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
  })

  useEffect(() => {
    if(fontError) {
      console.error("FONT ERROR:", fontError);
    }

    if(fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
