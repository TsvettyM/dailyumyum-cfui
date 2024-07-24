import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    try {
      const response = await axios.get("http://localhost:3001/users", {
        params: { username, password },
      });

      const user = response.data.find(
        (user: { username: string; password: string }) =>
          user.username === username && user.password === password
      );

      if (user) {
        return res.status(200).json({ message: "Login successful", user });
      } else {
        return res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
