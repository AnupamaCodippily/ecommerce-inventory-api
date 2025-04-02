export default interface IProduct {
    id: number;
    name: string;
    description?: string;
    price: number;
    category: string | 'UNCATEGORIZED';
    stock: number | 0;
    createdAt?: Date;
    updatedAt?: Date;
    isActive?: boolean;
    images: string[];
    tags: string[];
    ratings?: number;
    reviews?: string[];
    brand?: string | 'NO BRAND';
    sku: string;
    weight?: number;
    dimensions?: string;
    warranty?: string;
    returnPolicy?: string;
    shippingDetails?: {
        shippingCost: number;
        shippingTime: string;
        shippingMethod: string;
    };

}