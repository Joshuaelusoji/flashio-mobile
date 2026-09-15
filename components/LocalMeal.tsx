import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const LocalMeal = ({ title }: LocalMealHeadingProps) => {
    return (
        <View className="list-head">
            <Text className="list-title">{title}</Text>
            <TouchableOpacity className="list-action">
                <Text className="list-action-test">View all</Text>
            </TouchableOpacity>
        </View>
    )
}
export default LocalMeal
