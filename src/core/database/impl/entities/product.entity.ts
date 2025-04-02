import IProduct from "@common/interfaces/product.interface";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'products' })
export default class Product implements IProduct {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'text', default: 'NO DESCRIPTION' })
    description: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @Column({ type: 'varchar', length: 255, default: 'UNCATEGORIZED' })
    category: string;

    @Column({ type: 'int' })
    stock: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @Column({ type: 'boolean', default: true })
    isActive: boolean;

    @Column({ type: 'text', array: true, default: [] })
    images: string[];

    @Column({ type: 'text', array: true, default: [] })
    tags: string[];

    @Column({ type: 'decimal', precision: 2, scale: 1, nullable: true })
    ratings: number;

    @Column({ type: 'text', array: true, default: [] })
    reviews: string[];

    @Column({ type: 'varchar', length: 100, unique: true })
    sku: string;

    @Column({ type: 'varchar', length: 255, default: 'NO BRAND' })
    brand: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    dimensions: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    weight: number;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
    discount: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    supplier: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    warranty: string;

    @Column({ type: 'text', nullable: true })
    returnPolicy: string;

    @Column({ type: 'json', nullable: true })
    shippingDetails: {
        shippingCost: number;
        shippingTime: string;
        shippingMethod: string;
    };
}