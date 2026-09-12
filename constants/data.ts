import { icons } from "./icons";

export const tabs: AppTab[] = [
    { name: "index", title: "Home", icon: icons.home },
    { name: "search", title: "Search", icon: icons.wallet },
    { name: "order", title: "Order", icon: icons.activity },
    { name: "support", title: "Support", icon: icons.setting },
    { name: "profile", title: "Profile", icon: icons.setting },

];

export const HOME_USER = {
    name: "Joshua",
};

export const HOME_BALANCE = {
    amount: 8489.48,
    nextRenewalDate: "2026-03-18T09:00:00.000Z",
};



export const UPCOMING_SUBSCRIPTIONS: UpcomingSubscription[] = [
    {
        id: "spotify",
        icon: icons.spotify,
        name: "Spotify",
        price: 5.99,
        currency: "USD",
        daysLeft: 2,
    },
    {
        id: "notion",
        icon: icons.notion,
        name: "Notion",
        price: 12.0,
        currency: "USD",
        daysLeft: 4,
    },
    {
        id: "figma",
        icon: icons.figma,
        name: "Figma",
        price: 15.0,
        currency: "USD",
        daysLeft: 6,
    },
];

export const HOME_SUBSCRIPTIONS: Subscription[] = [
    {
        id: "adobe-creative-cloud",
        icon: icons.adobe,
        name: "Adobe Creative Cloud",
        plan: "Teams Plan",
        category: "Design",
        paymentMethod: "Visa ending in 8530",
        status: "active",
        startDate: "2025-03-20T10:00:00.000Z",
        price: 77.49,
        currency: "USD",
        billing: "Monthly",
        renewalDate: "2026-03-20T10:00:00.000Z",
        color: "#f5c542",
    },
    {
        id: "github-pro",
        icon: icons.github,
        name: "GitHub Pro",
        plan: "Developer",
        category: "Developer Tools",
        paymentMethod: "Mastercard ending in 2408",
        status: "active",
        startDate: "2024-11-24T10:00:00.000Z",
        price: 9.99,
        currency: "USD",
        billing: "Monthly",
        renewalDate: "2026-03-24T10:00:00.000Z",
        color: "#e8def8",
    },
    {
        id: "claude-pro",
        icon: icons.claude,
        name: "Claude Pro",
        plan: "Pro Plan",
        category: "AI Tools",
        paymentMethod: "Amex ending in 1010",
        status: "paused",
        startDate: "2025-06-27T10:00:00.000Z",
        price: 20.0,
        currency: "USD",
        billing: "Monthly",
        renewalDate: "2026-03-27T10:00:00.000Z",
        color: "#b8d4e3",
    },
    {
        id: "canva-pro",
        icon: icons.canva,
        name: "Canva Pro",
        plan: "Yearly Access",
        category: "Design",
        paymentMethod: "Visa ending in 7784",
        status: "cancelled",
        startDate: "2024-04-02T10:00:00.000Z",
        price: 119.99,
        currency: "USD",
        billing: "Yearly",
        renewalDate: "2026-04-02T10:00:00.000Z",
        color: "#b8e8d0",
    }
];
export const CATEGORIES: Category[] = [
    {
        id: "restaurants",
        name: "Restaurants",
        icon: icons.restaurant,
        slug: "restaurants",
        color: "bg-amber-100",
        textColor: "text-amber-800",
    },
    {
        id: "shops",
        name: "Shops",
        icon: icons.shop,
        slug: "shops",
        color: "bg-blue-100",
        textColor: "text-blue-800",
    },
    {
        id: "mall",
        name: "Mall",
        icon: icons.mall,
        slug: "mall",
        color: "bg-purple-100",
        textColor: "text-purple-800",
    },
    {
        id: "local",
        name: "Local",
        icon: icons.local,
        slug: "local",
        color: "bg-green-100",
        textColor: "text-green-800",
    },
    {
        id: "pharmacy",
        name: "Pharmacy",
        icon: icons.pharmacy,
        slug: "pharmacy",
        color: "bg-green-100",
        textColor: "text-green-800",
    },
    {
        id: "laundromat",
        name: "Laundromat",
        icon: icons.laundromat,
        slug: "laundromat",
        color: "bg-cyan-100",
        textColor: "text-cyan-800",
    },
    {
        id: "errand",
        name: "Send an Errand",
        icon: icons.logistics,
        slug: "send-an-errand",
        color: "bg-orange-100",
        textColor: "text-orange-800",
    },
];