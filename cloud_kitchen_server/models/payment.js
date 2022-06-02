// "use strict";
// const { Model, UUID } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//   class Payment extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       this.belongsTo(models.Customer, {foreignKey: 'customerId'});
//       this.belongsTo(models.Order, {foreignKey: 'orderId'})
//     }
//   }
//   Payment.init(
//     {
//       _id: {
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV4,
//         primaryKey: true,
//       },
//       date: {
//         type: DataTypes.DATE,
//         defaultValue: DataTypes.NOW,
//         allowNull: false, 
//       },
//       amount: {
//         type: DataTypes.DECIMAL(8,2),
//         allowNull: false,
//       }
//     },
//     {
//       sequelize,
//       modelName: "Payment",
//       tableName: "payments"
//     }
//   );
//   return Payment;
// };
