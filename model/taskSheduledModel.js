const Sequelize = require("sequelize");
const DB = require("./index");
const scheduledTasks = DB.define(
    "scheduled_tasks",{
        id: {
            field: "id",
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
          taskName: {
            field: "taskName",
            type: Sequelize.DataTypes.STRING,
            // allowNull: false
          },
          execution_time: {
            field: "execution_time",
            type: Sequelize.DataTypes.DATE,
          },
          status: {
            field: "status",
            type: Sequelize.DataTypes.STRING,
          }
},
{
  timestamps: false,
  tableName: "scheduled_tasks",
}
)
module.exports = scheduledTasks