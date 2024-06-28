/*
  Warnings:

  - A unique constraint covering the columns `[path]` on the table `Pages` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Pages_path_key" ON "Pages"("path");
