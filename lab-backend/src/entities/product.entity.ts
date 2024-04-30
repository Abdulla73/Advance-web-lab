import {  Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('Product')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: false, nullable: false })
    Product_name: string;

    @Column({ unique: true, nullable: false }) 
    Product_category: string;

    @Column({ unique: false, nullable: false })
    Price: number;

    @Column({ unique: false, nullable: false })
    Quantity_aval: string;
}
