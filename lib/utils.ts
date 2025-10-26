import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertToSubcurrency(amount: number, factor = 100){
  return Math.round(amount * factor)
}

/**
 * Reads currency configuration from environment variables (NEXT_PUBLIC_...).
 */
const DEFAULT_CURRENCY_CODE = process.env.NEXT_PUBLIC_CURRENCY_CODE || 'USD';
const DEFAULT_LOCALE = process.env.NEXT_PUBLIC_CURRENCY_LOCALE || 'en-US';
const DEFAULT_NO_DECIMALS = process.env.NEXT_PUBLIC_CURRENCY_NO_DECIMALS === 'true';

/**
 * Converts a number to a localized currency string format, using .env defaults.
 * @param amount The number to be formatted.
 * @param currencyCode Overrides the default currency code.
 * @param locale Overrides the default locale.
 * @param noDecimals Overrides the default decimal behavior.
 * @returns A formatted currency string (e.g., "Rp500.000").
 */
export const formatCurrency = (
    amount: number,
    currencyCode: string = DEFAULT_CURRENCY_CODE,
    locale: string = DEFAULT_LOCALE,
    noDecimals: boolean = DEFAULT_NO_DECIMALS
): string => {
    const numericAmount = isNaN(amount) ? 0 : amount;

    const options: Intl.NumberFormatOptions = {
        style: 'currency',
        currency: currencyCode,
    };

    if (noDecimals) {
        options.maximumFractionDigits = 0;
    } else {
        // Ensure standard decimal behavior if not explicitly disabled
        options.minimumFractionDigits = 2; 
    }

    try {
        const formatter = new Intl.NumberFormat(locale, options);
        return formatter.format(numericAmount);
        
    } catch (error) {
        console.error("Error formatting currency. Check NEXT_PUBLIC variables.", error);
        return `${currencyCode} ${numericAmount.toFixed(2)}`;
    }
};
