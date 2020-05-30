import { Sequelize } from "sequelize";

export const database = new Sequelize({
  database: "rednit",
  dialect: "postgres",
  storage: ":memory:"
});