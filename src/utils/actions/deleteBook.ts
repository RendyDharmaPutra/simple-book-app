'use server';

import { revalidatePath } from "next/cache";
import { deleteBook } from "../db";

export default async function deleteBookAction(formData: FormData): Promise<void> {
    const idBook: number = Number(formData.get('idBook'));

    const result: bookResult = await deleteBook(idBook);


    result && revalidatePath('/');
}