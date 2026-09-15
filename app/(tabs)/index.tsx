import "@/global.css";
import { styled } from "nativewind";
import {FlatList, Text, View, ScrollView} from "react-native";
import {Link} from "expo-router";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { Category, Restaurant, LocalMeal, ContinentalMeal, Drink} from "@/components";
import {CATEGORIES, RESTAURANTS, LOCAL_MEALS, CONTINENTAL_MEALS} from "@/constants/data";
import ShopByCategoryCard from "@/components/ShopByCategoryCard";
import RestaurantCard from "../../components/RestaurantCard";
import LocalMealCard from "../../components/LocalMealCard";
import ContinentalMealCard from "@/components/ContinentalMealCard";

const SafeAreaView = styled(RNSafeAreaView);

/** Renders the home menu with links to the app's primary flows. */
export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <ScrollView className="flex-1 p-5" showsVerticalScrollIndicator={false}>
                <Text className="text-4xl font-sans-bold text-accent">Menu</Text>
                <View>
                    <Category title="Shopping"/>
                    <FlatList
                        data={CATEGORIES}
                        renderItem={({ item }) => (<ShopByCategoryCard data={item} />)}
                        keyExtractor={(item) => item.id}
                        numColumns={4}
                        columnWrapperStyle={{
                            gap: 4,
                            marginBottom: 4,
                        }}
                    />
                </View>
                <View>
                    <Restaurant title="Restaurants" />
                    <FlatList
                        data={RESTAURANTS}
                        renderItem={({ item }) => (<RestaurantCard data={item} />)}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View>
                    <LocalMeal title={"Local Meals"} />
                    <FlatList
                        data={LOCAL_MEALS}
                        renderItem={({ item }) => (<LocalMealCard data={item} />)}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View>
                    <ContinentalMeal title={"Continental Meals"} />
                    <FlatList
                        data={CONTINENTAL_MEALS}
                        renderItem={({ item }) => (<ContinentalMealCard data={item} />)}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}