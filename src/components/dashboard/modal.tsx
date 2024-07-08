import deleteBookAction from "@/utils/actions/deleteBook";
import { Dispatch, SetStateAction } from "react";
import { useFormStatus } from "react-dom";
import FormDeleteButton from "./button";

export default function Modal({
  idBook,
  title,
  isOpen,
  setShow,
}: {
  idBook: number;
  title: string;
  isOpen: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}): JSX.Element | null {
  if (!isOpen) return null;

  const onAction = async (formData: FormData) => {
    const idBook: number = Number(formData.get("idBook"));
    console.log(idBook);

    await deleteBookAction(idBook);
    setShow(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <section className="bg-white layout rounded-lg shadow-lg w-3/4 md:w-1/3">
        <h2 className="mb-4 headline">Hapus Buku</h2>
        <p className="mb-4 text-gray-600">
          Anda yakin untuk menghapus buku berjudul {title}?
        </p>
        <div className="flex flex-row items-end justify-end gap-4 ">
          <button
            onClick={() => setShow(false)}
            className="py-2 px-4 hover:bg-gray-200 text-gray-800 rounded duration-200"
          >
            Batal
          </button>
          <form
            action={onAction}
            className={`py-2 px-4 hover:bg-danger  text-danger hover:text-white rounded duration-200`}
          >
            <input id="idBook" name={"idBook"} value={idBook} type="hidden" />
            <FormDeleteButton />
          </form>
        </div>
      </section>
    </div>
  );
}