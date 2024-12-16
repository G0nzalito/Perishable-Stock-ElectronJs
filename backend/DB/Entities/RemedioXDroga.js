import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const RemedioXDroga = sequelize.define( 'RemedioXDroga', {
  idRemedioXDroga:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  }
},{
  tableName: 'RemedioXDroga',
  timestamps: false
})

export default RemedioXDroga