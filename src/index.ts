import { Client } from "./client";
import { config } from "dotenv";

const client = new Client({
  baseUserDirectory: __dirname,
  intents: [], // insert bot intents
  partials: [], // insert partial events

  color: "Blurple", // insert an accent color
});

config();
client.login(process.env.TOKEN);
