import {View, Text, Image} from 'react-native'
import React from 'react'

const ShopByCategoryCard = ({ data: { name, icon, slug, color, textColor }}:ShopByCategoryCardProps) => {
    return (
        <View className="restaurant-card">
            <View className="restaurant-row">
                <Image source={icon} className="restaurant-icon"/>
                <View>
                    <Text className="restaurant-name">{name}</Text>
                </View>
            </View>
        </View>
    )
}
export default ShopByCategoryCard
