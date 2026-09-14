import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "budgets",
    timestamps: true
})

export class Budget extends Model {
    @Column({
        allowNull: false,
        type: DataType.STRING(100)
    })
    declare name: string;

    @Column({
        allowNull: false,
        type: DataType.DECIMAL(10, 2)
    })
    declare amount: number;
}