import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const Category = ({ title }: CategoryHeadingProps) => {
    return (
        <View className="list-head">
            <Text className="list-title">Shop by Category</Text>
        </View>
    )
}
export default Category
