import { countriesDummy, phoneCountryCodeDummy, shippingOptionsDummy } from "@/data/shipping";

// data/shipping.ts
export async function getShippingOptions() {
  return new Promise((resolve) => setTimeout(() => resolve(shippingOptionsDummy), 300));
}
export async function getCountries() {
  return new Promise((resolve) => setTimeout(() => resolve(countriesDummy), 300));
}

export async function getCountriesCode() {
  return new Promise((resolve) => setTimeout(() => resolve(phoneCountryCodeDummy), 300));
}

