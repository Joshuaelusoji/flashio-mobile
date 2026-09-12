import "@/global.css";
import { styled } from "nativewind";
import { Text, View } from "react-native";
import {Link} from "expo-router";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { Category, ExploreRestaurants, FeaturedMeal, Drink} from "@/components";
import UpcomingSubscriptionCard from "@/components/UpcomingSubscriptionCard"
import {CATEGORIES, UPCOMING_SUBSCRIPTIONS} from "@/constants/data";
import ShopByCategoryCard from "@/components/ShopByCategoryCard";

const SafeAreaView = styled(RNSafeAreaView);

/** Renders the home menu with links to the app's primary flows. */
export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text className="text-4xl font-sans-bold text-success">Menu</Text>
            <View>
                <Category title="Shop by Category"/>
                <ShopByCategoryCard data={CATEGORIES[0]} />
            </View>
            <View>
                <ExploreRestaurants title="Explore more"/>
            </View>
            <View>
                <FeaturedMeal title="Featured Meal"/>
            </View>
            <View>
                <Drink title="Drinks"/>
            </View>

        </SafeAreaView>
    );
}
