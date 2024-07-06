-- CreateTable
CREATE TABLE "Category" (
    "idCategory" SERIAL NOT NULL,
    "nameCategory" VARCHAR(20) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("idCategory")
);

-- CreateTable
CREATE TABLE "Writer" (
    "idWriter" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,

    CONSTRAINT "Writer_pkey" PRIMARY KEY ("idWriter")
);

-- CreateTable
CREATE TABLE "Publisher" (
    "idPublisher" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,

    CONSTRAINT "Publisher_pkey" PRIMARY KEY ("idPublisher")
);

-- CreateTable
CREATE TABLE "Book" (
    "idBook" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "year" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "writerId" INTEGER NOT NULL,
    "publisherId" INTEGER NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("idBook")
);

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("idCategory") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_writerId_fkey" FOREIGN KEY ("writerId") REFERENCES "Writer"("idWriter") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "Publisher"("idPublisher") ON DELETE RESTRICT ON UPDATE CASCADE;
