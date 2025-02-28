-- CreateTable
CREATE TABLE "Artisan" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fixeroni_tag" TEXT NOT NULL,
    "yearsOfExperience" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "linkToPortfolio" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "categoryOfService" TEXT NOT NULL,
    "governmentIdLink" TEXT NOT NULL,
    "profilePicture" TEXT NOT NULL,
    "accountType" TEXT NOT NULL,

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

-- CreateIndex
CREATE UNIQUE INDEX "Artisan_email_key" ON "Artisan"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Artisan_fixeroni_tag_key" ON "Artisan"("fixeroni_tag");

-- CreateIndex
CREATE UNIQUE INDEX "ConfirmationCode_artisanId_key" ON "ConfirmationCode"("artisanId");

-- AddForeignKey
ALTER TABLE "ConfirmationCode" ADD CONSTRAINT "ConfirmationCode_artisanId_fkey" FOREIGN KEY ("artisanId") REFERENCES "Artisan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
