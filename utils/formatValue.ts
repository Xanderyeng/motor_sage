// This Utility function will formart the Prices to a clean formart
export const formatValue = (value: number | bigint, unit: string = '', currency: string = 'USD'): string => {
    if (unit) {
      return `${value} ${unit}`;
    } else {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
        minimumFractionDigits: 0,
      }).format(value);
    }
  };