import {View, Text} from 'react-native';
import { Image } from 'expo-image';
import React from 'react';

const RestaurantCard = ({ data: { name, imageUrl, location, deliveryTime, deliveryFee, description, isActive }}:RestaurantCardProps) => {
    return (
        <View className="restaurant-card">
            <View className="restaurant-row">
                <Image source={imageUrl} className="border-4 border-accent" contentFit="cover" style={{ width: 60, height: 60,  borderRadius: 100, }} />
                <View className="restaurant-row mt-2">
                    <Text className={`restaurant-name`}>{name}</Text>
                    <Text className={`restaurant-location`}>{location}</Text>
                </View>
            </View>
        </View>
    )
}
export default RestaurantCard
