import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Tipo = sequelize.define("Tipo", {
  idTipo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: "Tipo",
  timestamps: false,
});

export default Tipo