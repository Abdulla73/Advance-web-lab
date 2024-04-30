import {  Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('Cart')
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: false, nullable: false })
    Product_name: string;

    @Column({ unique: false, nullable: false })
    Price: number;

    @Column({ unique: false, nullable: false })
    Quantity_buyed: string;
}

