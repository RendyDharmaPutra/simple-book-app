import { prisma } from './prisma';

export async function getBooks(): Promise<book[]> {
    const books: book[] = await prisma.book.findMany({
        select: {
            id: true,
            title: true,
            year: true,
            category: {
                select: {
                    name: true
                }
            },
            publisher: {
                select: {
                    name: true
                }
            }, 
            writer: {
                select: {
                    name: true
                }
            }
        },
        orderBy: {
            title: 'asc'
        }
    });

    return books;
}

export async function insertBook({ title, year, publisherId, writerId, categoryId }: bookData): Promise<bookResult> {
    const book: bookResult = await prisma.book.create({
        data: {
            title,
            year,
            publisherId,
            writerId,
            categoryId,
        }
    })

    return book;
}

export async function deleteBook(id: number): Promise<bookResult> {
    const book: bookResult = await prisma.book.delete({
        where: {
            id
        }
    })

    return book;
}

export async function getCategories(): Promise<foreign[]> {
    const categories: foreign[] = await prisma.category.findMany({
        orderBy: {
            name: 'asc'
        }
    })

    return categories;
}

export async function getWriters(): Promise<foreign[]> {
    const writers: foreign[] = await prisma.writer.findMany({
        orderBy: {
            name: 'asc'
        }
    })

    return writers;
}

export async function getPublishers(): Promise<foreign[]> {
    const publishers: foreign[] = await prisma.publisher.findMany({
        orderBy: {
            name: 'asc'
        }
    })

    return publishers;
}