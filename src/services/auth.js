import db from "../models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 } from "uuid";
const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));
require("dotenv").config();
export const registerService = ({ username, email, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOrCreate({
        where: {
          email,
        },
        defaults: {
          email,
          username,
          password: hashPassword(password),
          id: v4(),
        },
      });
      const token =
        response[1] &&
        jwt.sign(
          { id: response[0].id, email: response[0].email },
          process.env.SECRET_KEY,
          { expiresIn: "2d" }
        );
      resolve({
        err: token ? 0 : 2,
        message: token ? "Success register" : "Email existed",
        token: token || null,
        userId: response[0].id,
      });
    } catch (error) {
      reject(error);
    }
  });

export const loginService = ({ email, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: {
          email,
        },
        raw: true,
      });
      const isCorrectPassword =
        response && bcrypt.compareSync(password, response.password);
      const token =
        isCorrectPassword &&
        jwt.sign(
          { id: response.id, email: response.email },
          process.env.SECRET_KEY,
          { expiresIn: "2d" }
        );
      resolve({
        err: token ? 0 : 2,
        message: token
          ? "Success login"
          : response
          ? "Password incorrect"
          : "Email not found",
        token: token || null,
        userId: response.id,
      });
    } catch (error) {
      reject(error);
    }
  });
