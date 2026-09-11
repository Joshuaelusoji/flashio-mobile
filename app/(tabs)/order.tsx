import {View, Text} from 'react-native'
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const Order = () => {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text>Orders</Text>
        </SafeAreaView>
    )
}
export default Order
