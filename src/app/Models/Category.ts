import { Product } from './Product';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 255})
    name: string

    @Column()
    isPublished: boolean

    @Column()
    parentId: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(() => Product, (product) => product.category)
    products: Product[]
}