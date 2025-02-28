/*
  Warnings:

  - You are about to drop the column `categoryOfService` on the `Artisan` table. All the data in the column will be lost.
  - You are about to drop the column `linkToPortfolio` on the `Artisan` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Artisan" DROP COLUMN "categoryOfService",
DROP COLUMN "linkToPortfolio",
ADD COLUMN     "workPortfolio" TEXT,
ADD COLUMN     "workPortfolioName" TEXT,
ADD COLUMN     "workPortfolioSize" INTEGER,
ADD COLUMN     "workPortfolioType" TEXT;
