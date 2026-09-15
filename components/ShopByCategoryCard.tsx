import {View, Text, Image} from 'react-native'
import React from 'react'

const ShopByCategoryCard = ({ data: { name, icon, slug, color, textColor }}:ShopByCategoryCardProps) => {
    return (
        <View className={`category-card ${color}`}>
            <View className="category-row">
                <Image source={icon} className="category-icon"/>
                <View>
                    <Text className={`category-name ${textColor}`}>{name}</Text>
                </View>
            </View>
        </View>
    )
}
export default ShopByCategoryCard
