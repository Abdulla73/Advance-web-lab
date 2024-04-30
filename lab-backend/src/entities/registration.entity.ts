import {  Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('Registration')
export class Registration {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: false, nullable: false })
    Name: string;

    @Column({ unique: true, nullable: false }) 
    Email: string;

    @Column({ unique: false, nullable: false })
    Password: string;

    
}
