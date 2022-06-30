import { sign, SignOptions } from "jsonwebtoken";
import "dotenv/config";

export function generateToken() {
  const payload = {
    name: "Neelutpal Saha",
  };

  const token = process.env.TOKEN_SECRET as string;

  const signInOptions: SignOptions = {
    algorithm: "HS256",
    expiresIn: "1h",
  };

  return sign(payload, token, signInOptions);
}
