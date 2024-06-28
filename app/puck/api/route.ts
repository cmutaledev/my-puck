import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import fs from "fs";
import db from "../../../db";

export async function POST(request: Request) {
  const payload = await request.json();

  // const existingData = JSON.parse(
  //   fs.existsSync("database.json")
  //     ? fs.readFileSync("database.json", "utf-8")
  //     : "{}"
  // );

  // const updatedData = {
  //   ...existingData,
  //   [payload.path]: payload.data,
  // };

  // const updateUser = await prisma.user.update({
  //   where: {
  //     email: 'viola@prisma.io',
  //   },
  //   data: {
  //     name: 'Viola the Magnificent',
  //   },
  // })
  try {
    const updatePage = await db.pages.update({
      where: {
        path: payload.path,
      },
      data: {
        content: payload.data,
      },
    });
  } catch (e) {
    console.log("creating page instead: ", e);
    try {
      const createPage = await db.pages.create({
        data: {
          path: payload.path,
          content: payload.data,
        },
      });
    } catch (e) {
      console.log("that failed too. check your data closely: ", e);
    }
  }

  // fs.writeFileSync("database.json", JSON.stringify(updatedData));

  // Purge Next.js cache
  revalidatePath(payload.path);

  return NextResponse.json({ status: "ok" });
}
