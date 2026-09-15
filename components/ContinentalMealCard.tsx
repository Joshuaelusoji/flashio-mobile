import {View, Text} from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { styled } from 'nativewind'

const StyledImage = styled(Image)

const ContinentalMealCard = ({ data: { name, price, location, imageUrl }}: ContinentalMealCardProps) => {
    return (
        <View className="featured-card">
            <StyledImage
                source={imageUrl}
                contentFit="cover"
                className="featured-image"
            />
            <View className="featured-row mt-6">
                <Text className={`featured-name`}>{name}</Text>
            </View>
            <View className=" flex-row justify-between">
                <Text className='featured-location'>{location}</Text>
                <Text className='featured-price'>{price}</Text>
            </View>
        </View>
    )
}
export default ContinentalMealCard
