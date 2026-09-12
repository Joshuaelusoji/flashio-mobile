import "@/global.css";
import { styled } from "nativewind";
import { Text, View } from "react-native";
import {Link} from "expo-router";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

/** Renders the home menu with links to the app's primary flows. */
export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text className="text-7xl font-sans-extrabold text-success">Menu</Text>
            <Link href="/WelcomeScreen" className="mt-4 rounded bg-primary text-white p-4">
                Go to WelcomeScreen
            </Link>
            <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4">
                SignIn
            </Link>
            <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4">
                SignUp
            </Link>

        </SafeAreaView>
    );
}
