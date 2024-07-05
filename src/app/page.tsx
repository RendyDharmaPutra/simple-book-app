import Table from "@/components/table";
import Link from "next/link";

export default function Dashboard(): JSX.Element {
  return (
    <div className="p-4 lg:p-5 xl:p-6 flex flex-col justify-center items-center bg-page">
      <section className="p-4 lg:p-5 xl:p-6 flex flex-col gap-6 w-full md:w-[46rem] lg:w-[65rem] rounded-2xl bg-white">
        <h1 className="font-semibold text-grey-900 text-xl lg:text-2xl">
          Daftar Buku
        </h1>
        <section className="flex flex-col md:flex-row md:justify-between gap-4">
          <div className="flex flex-col md:flex-row gap-2">
            <input
              type="search"
              placeholder="Cari Judul Buku"
              className="px-3 py-2 w-full md:w-[20rem] outline-none rounded-xl border border-gray-300 focus:border-secondary bg-white hover:bg-page focus:bg-white duration-200"
            />
            <button
              type="submit"
              className="px-4 py-2 min-h-[2.5rem] text-center font-semibold text-white outline-none rounded-xl bg-primary hover:brightness-90 active:brightness-100 duration-200"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                  fill="white"
                ></path>
              </svg>
            </button>
          </div>
          <Link href={"/add"} className="w-full md:w-[8.5rem]">
            <button className="px-4 py-2 w-full md:w-[8.5rem] min-h-[2.5rem] text-center text-white rounded-xl bg-primary">
              Tambah Buku
            </button>
          </Link>
        </section>
        <Table />
      </section>
    </div>
  );
}
