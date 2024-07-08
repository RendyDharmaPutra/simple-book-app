import Error from "@/app/[idBook]/error";
import AddButton from "@/components/form/add_button";
import Input from "@/components/form/input";
import editBookAction from "@/utils/actions/edit_book";
import { getBook, getCategories, getPublishers, getWriters } from "@/utils/db";

export default async function EditBook({
  params,
}: {
  params: { idBook: number };
}): Promise<JSX.Element> {
  const categories: foreign[] = await getCategories();
  const writers: foreign[] = await getWriters();
  const publishers: foreign[] = await getPublishers();
  const book: editBook | null = await getBook(Number(params.idBook));

  return (
    <form
      action={editBookAction}
      className="layout gap-6 w-full rounded-2xl bg-white"
    >
      <h1 className="headline">Tambah Buku</h1>
      <div className="row-section flex-wrap gap-6 md:gap-4">
        <input type="hidden" name="id" value={book!.id} />
        <Input
          defaultValue={book!.title}
          name="title"
          label="Judul Buku"
          type="text"
          data={null}
        />
        <Input
          defaultValue={book!.year}
          name="year"
          label="Tahun Terbit"
          type="text"
          data={null}
        />
        <Input
          defaultValue={book!.writer.id}
          name="writer"
          label="Penulis"
          type="select"
          data={writers}
        />
        <Input
          defaultValue={book!.publisher.id}
          name="publisher"
          label="Penerbit"
          type="select"
          data={publishers}
        />
        <Input
          defaultValue={book!.category.id}
          name="category"
          label="Kategori"
          type="select"
          data={categories}
        />
      </div>
      <AddButton />
    </form>
  );
}
