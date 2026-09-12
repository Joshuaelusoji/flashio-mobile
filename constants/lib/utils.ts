export function formatCurrency(value: number, currency: string = "NGN"): string {
    try {
        return new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value);
    } catch (error) {
        return `₦${value.toFixed(2)}`;
    }
}