-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_userId_fkey";

-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "prioritize" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
