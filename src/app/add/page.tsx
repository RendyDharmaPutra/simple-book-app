import AddButton from "@/components/form/add_button";
import Input from "@/components/form/input";
import addBook from "@/utils/actions/addbook";
import { getCategories, getPublishers, getWriters } from "@/utils/db";

export default async function AddPage(): Promise<JSX.Element> {
  const categories: foreign[] = await getCategories();
  const writers: foreign[] = await getWriters();
  const publishers: foreign[] = await getPublishers();

  return (
    <form action={addBook} className="layout gap-6 w-full rounded-2xl bg-white">
      <h1 className="headline">Tambah Buku</h1>
      <div className="row-section flex-wrap gap-6 md:gap-4">
        <Input
          defaultValue=""
          name="title"
          label="Judul Buku"
          type="text"
          data={null}
        />
        <Input
          defaultValue=""
          name="year"
          label="Tahun Terbit"
          type="text"
          data={null}
        />
        <Input
          defaultValue=""
          name="writer"
          label="Penulis"
          type="select"
          data={writers}
        />
        <Input
          defaultValue=""
          name="publisher"
          label="Penerbit"
          type="select"
          data={publishers}
        />
        <Input
          defaultValue=""
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
