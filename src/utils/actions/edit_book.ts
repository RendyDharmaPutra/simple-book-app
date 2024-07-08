'use server'

import { revalidatePath } from "next/cache";
import { editBook, insertBook } from "../db";
import { redirect } from "next/navigation";

export default async function editBookAction(formData: FormData): Promise<void> {
    const book: bookDataEdit = {
        id: Number(formData.get('id')),
        title: String(formData.get('title')),
        year: Number(formData.get('year')),
        writerId: Number(formData.get('writer')),
        publisherId: Number(formData.get('publisher')),
        categoryId: Number(formData.get('category')),
    }

    const result: bookResult = await editBook(book);
    result && revalidatePath('/');
    result && redirect('/')

}