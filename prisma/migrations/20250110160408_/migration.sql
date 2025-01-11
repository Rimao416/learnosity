/*
  Warnings:

  - Added the required column `cover` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile` to the `Professor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "cover" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Professor" ADD COLUMN     "profile" TEXT NOT NULL;
