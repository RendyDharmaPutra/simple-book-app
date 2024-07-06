import Input from "@/components/form/input";

export default function AddPage(): JSX.Element {
	return (
		<form action={""} className="layout gap-6 w-full rounded-2xl bg-white">
			<h1 className="headline">Tambah Buku</h1>
			<div className="row-section flex-wrap gap-4">
				<Input name="Judul Buku" type="text" />
				<Input name="Year" type="text" />
				<Input name="Penulis" type="text" />
				<Input name="Penerbit" type="text" />
				<Input name="Kategori" type="text" />
			</div>
			<button
				type="submit"
				className="self-end w-full md:w-[6rem] h-[2.5rem] btn-primary"
			>
				Simpan
			</button>
		</form>
	);
}
