/*
  Warnings:

  - Added the required column `updatedAt` to the `Artisan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Artisan" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "provider" "AuthProvider" NOT NULL DEFAULT 'local',
ADD COLUMN     "providerId" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "password" DROP NOT NULL;

-- AlterTable
ALTER TABLE "RefreshToken" ADD COLUMN     "artisanId" TEXT;

-- CreateIndex
CREATE INDEX "Artisan_provider_providerId_idx" ON "Artisan"("provider", "providerId");

-- AddForeignKey
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_artisanId_fkey" FOREIGN KEY ("artisanId") REFERENCES "Artisan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
