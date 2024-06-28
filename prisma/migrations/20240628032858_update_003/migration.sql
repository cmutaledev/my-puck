/*
  Warnings:

  - You are about to drop the column `siteId` on the `Pages` table. All the data in the column will be lost.
  - You are about to drop the `Site` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pages" DROP CONSTRAINT "Pages_siteId_fkey";

-- AlterTable
ALTER TABLE "Pages" DROP COLUMN "siteId";

-- DropTable
DROP TABLE "Site";
