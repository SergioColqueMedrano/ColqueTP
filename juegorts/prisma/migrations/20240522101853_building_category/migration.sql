-- CreateEnum
CREATE TYPE "Size" AS ENUM ('M', 'L', 'XL');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('men', 'women');

-- CreateTable
CREATE TABLE "Building" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Building_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unit" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "inStock" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "sizes" "Size"[] DEFAULT ARRAY[]::"Size"[],
    "slug" TEXT NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "Category" "Category" NOT NULL,
    "BuildingId" TEXT NOT NULL,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnitImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "UnitId" TEXT NOT NULL,

    CONSTRAINT "UnitImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Building_name_key" ON "Building"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Unit_slug_key" ON "Unit"("slug");

-- CreateIndex
CREATE INDEX "Unit_Category_idx" ON "Unit"("Category");

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_BuildingId_fkey" FOREIGN KEY ("BuildingId") REFERENCES "Building"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitImage" ADD CONSTRAINT "UnitImage_UnitId_fkey" FOREIGN KEY ("UnitId") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
