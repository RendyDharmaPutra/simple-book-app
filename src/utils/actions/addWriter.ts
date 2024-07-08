"use server";

import { revalidatePath } from "next/cache";
import { getWriter, insertBook, insertWriter } from "../db";
import { redirect } from "next/navigation";

export default async function addWriter(formData: FormData): Promise<void> {
	const writer: { name: string } = {
		name: String(formData.get("writer")),
	};

	const search: { id: number; name: string } | null = await getWriter(writer);

	let result: { id: number; name: string };

	if (search == null) {
		result = await insertWriter(writer);
		result && revalidatePath("/add");
		result && redirect("/");
	} else {
		null;
	}
}
