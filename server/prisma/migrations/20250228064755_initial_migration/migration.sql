-- CreateEnum
CREATE TYPE "AuthProvider" AS ENUM ('local', 'google');

-- CreateTable
CREATE TABLE "Artisan" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "fixeroniTag" TEXT NOT NULL,
    "yearsOfExperience" INTEGER,
    "category" TEXT,
    "firstName" TEXT,
    "linkToPortfolio" TEXT,
    "address" TEXT,
    "categoryOfService" TEXT,
    "governmentIdLink" TEXT,
    "profilePicture" TEXT,
    "accountType" TEXT NOT NULL,
    "provider" "AuthProvider" NOT NULL DEFAULT 'local',
    "providerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Artisan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConfirmationCode" (
    "id" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "code" TEXT NOT NULL,
    "artisanId" TEXT NOT NULL,

    CONSTRAINT "ConfirmationCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RefreshToken" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "revokedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "artisanId" TEXT,

    CONSTRAINT "RefreshToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Artisan_email_key" ON "Artisan"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Artisan_fixeroniTag_key" ON "Artisan"("fixeroniTag");

-- CreateIndex
CREATE INDEX "Artisan_provider_providerId_idx" ON "Artisan"("provider", "providerId");

-- CreateIndex
CREATE UNIQUE INDEX "ConfirmationCode_artisanId_key" ON "ConfirmationCode"("artisanId");

-- CreateIndex
CREATE UNIQUE INDEX "RefreshToken_token_key" ON "RefreshToken"("token");

-- CreateIndex
CREATE INDEX "RefreshToken_userId_idx" ON "RefreshToken"("userId");

-- AddForeignKey
ALTER TABLE "ConfirmationCode" ADD CONSTRAINT "ConfirmationCode_artisanId_fkey" FOREIGN KEY ("artisanId") REFERENCES "Artisan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_artisanId_fkey" FOREIGN KEY ("artisanId") REFERENCES "Artisan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
