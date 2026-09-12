import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const ExploreRestaurants = ({ title }) => {
    return (
        <View className="list-head">
            <Text className="list-title">Explore Restaurants</Text>
            <TouchableOpacity className="list-action">
                <Text className="list-action-test">View all</Text>
            </TouchableOpacity>
        </View>
    )
}
export default ExploreRestaurants
