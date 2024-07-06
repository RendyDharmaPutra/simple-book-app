import { prisma } from './prisma';

export async function getBooks(): Promise<book[]> {
    const books: book[] = await prisma.book.findMany({
        select: {
            idBook: true,
            title: true,
            year: true,
            category: {
                select: {
                    nameCategory: true
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