import { getBook } from "@/utils/db";

export default async function EditBook({
  params,
}: {
  params: { idBook: number };
}): Promise<JSX.Element> {
  const book: book | null = await getBook(Number(params.idBook));
  return <h1>{book?.title}</h1>;
}
