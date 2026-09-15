import type { ImageSourcePropType } from "react-native";

declare global {
    interface AppTab {
        name: string;
        title: string;
        icon: ImageSourcePropType;
    }

    interface TabIconProps {
        focused: boolean;
        icon: ImageSourcePropType;
    }

    interface Subscription {
        id: string;
        icon: ImageSourcePropType;
        name: string;
        plan?: string;
        category?: string;
        paymentMethod?: string;
        status?: string;
        startDate?: string;
        price: number;
        currency?: string;
        billing: string;
        renewalDate?: string;
        color?: string;
    }

    interface SubscriptionCardProps extends Omit<Subscription, "id"> {
        expanded: boolean;
        onPress: () => void;
        onCancelPress?: () => void;
        isCancelling?: boolean;
    }

    interface UpcomingSubscription {
        id: string;
        icon: ImageSourcePropType;
        name: string;
        price: number;
        currency?: string;
        daysLeft: number;
    }

    interface UpcomingSubscriptionCardProps
        extends Omit<UpcomingSubscription, "id"> {}

    interface CategoryHeadingProps {
        title: string;
    }

    interface Category {
        id: string;
        name: string;
        icon: ImageSourcePropType;
        slug: string;
        color: string;
        textColor: string;
    }

    interface ShopByCategoryCardProps {
        data: Category;
    }

    interface Restaurant {
        id: string;
        path: string;
        name: string;
        imageUrl: string;
        location: string;
        deliveryTime: string;
        deliveryFee: number;
        description: string;
        isActive: boolean;

    }

    interface RestaurantCardProps {
        data: Restaurant;

    }

    interface RestaurantsHeadingProps {
        title: string;
    }

    interface LocalMeal {
        id: string;
        name: string;
        price: number;
        location: string;
        imageUrl: string;
    }

    interface LocalMealCardProps {
        data: LocalMeal;
    }

    interface LocalMealHeadingProps {
        title: string;
    }

    interface ContinentalMeal {
        id: string;
        name: string;
        price: number;
        location: string;
        imageUrl: string;
    }

    interface ContinentalMealCardProps {
        data: LocalMeal;
    }

    interface ContinentalMealHeadingProps {
        title: string;
    }


}

export {};