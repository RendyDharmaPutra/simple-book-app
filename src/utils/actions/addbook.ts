'use server'

import { revalidatePath } from "next/cache";
import { insertBook } from "../db";
import { redirect } from "next/navigation";

export default async function addBook(formData: FormData) {
    const book: bookData = {
        title: String(formData.get('title')),
        year: Number(formData.get('year')),
        writerId: Number(formData.get('writer')),
        publisherId: Number(formData.get('publisher')),
        categoryId: Number(formData.get('category')),
    }


    
    const result: bookResult = await insertBook(book);
    result && revalidatePath('/');
    result && redirect('/')

}