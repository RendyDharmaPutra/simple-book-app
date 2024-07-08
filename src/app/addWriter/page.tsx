import AddButton from "@/components/form/add_button";
import Input from "@/components/form/input";
import addWriter from "@/utils/actions/addWriter";

export default async function AddWriterPage(): Promise<JSX.Element> {
	return (
		<form action={addWriter} className="layout gap-6 rounded-2xl bg-white">
			<h1 className="headline">Tambah Penulis</h1>
			<div className="row-section flex-wrap gap-6 md:gap-4">
				<Input
					defaultValue=""
					name="writer"
					label="Nama Penulis"
					type="text"
					data={null}
				/>
			</div>
			<AddButton />
		</form>
	);
}
