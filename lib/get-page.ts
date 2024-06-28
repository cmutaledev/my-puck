import { Data } from "@measured/puck";
import fs from "fs";
import db from "../db";

// Replace with call to your database
export const getPage = (path: string) => {
  const allData: Record<string, Data> | null = fs.existsSync("database.json")
    ? JSON.parse(fs.readFileSync("database.json", "utf-8"))
    : null;

    // console.log("returning...", allData[path])
  return allData ? allData[path] : null;
};

export const getPageByPath = async (path: string) => {
  const data = await db.pages.findUnique({
    where: {
      path: path,
    },
  });

  return data ? data.content : undefined;
};
