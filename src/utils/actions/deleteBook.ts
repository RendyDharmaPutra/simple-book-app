'use server';

import { revalidatePath } from "next/cache";
import { deleteBook } from "../db";
import {redirect} from 'next/navigation'

export default async function deleteBookAction(idBook: number): Promise<void> {
    const result: bookResult = await deleteBook(idBook);

    result && revalidatePath('/');
    result && redirect('/');
}