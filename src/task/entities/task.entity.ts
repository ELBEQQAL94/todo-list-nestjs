import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ type: 'timestamp', default: new Date() })
    createdAt: Date;
}
