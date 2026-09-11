import {View, Text} from 'react-native'
import React from 'react'
import {Link, useLocalSearchParams} from "expo-router";

const OrderDetails = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    return (
        <View>
            <Text>Order Details: {id}</Text>
            <Link href="/">Go back</Link>
        </View>
    )
}
    export default OrderDetails
