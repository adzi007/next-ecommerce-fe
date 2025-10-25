import { create } from "zustand";

type ShippingFormData = {
    firstName : string;
    lastName : string;
    email : string;
    phone : string;
    address : string;
    country : string;
    city : string;
    zipCode : string;
    deliveryMethod : string;
} | null

interface ShippingFormStore {
    shippingData: ShippingFormData;
    setShippingData: (data: ShippingFormData) => void;
}

export const useShippingFormStore = create<ShippingFormStore>( (set) => ({
    shippingData: null,
    setShippingData: (data) => {
        set({ shippingData: data })
    }
}))