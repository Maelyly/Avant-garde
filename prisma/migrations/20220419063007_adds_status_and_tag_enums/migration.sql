/*
  Warnings:

  - Changed the type of `tag` on the `Card` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `status` on the `Card` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Complete', 'Incomplete');

-- CreateEnum
CREATE TYPE "Tag" AS ENUM ('Work', 'Study');

-- DropIndex
DROP INDEX "Card_name_key";

-- AlterTable
ALTER TABLE "Card" DROP COLUMN "tag",
ADD COLUMN     "tag" "Tag" NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL;
