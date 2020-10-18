import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
    
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ type: 'text' })
    username: string;
    
    @Column({ type: 'text' })
    password: string;
    
    @Column({ type: 'text' })
    email: string;
}