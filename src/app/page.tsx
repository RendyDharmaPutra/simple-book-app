import Table from "@/components/table";

export default function Dashboard(): JSX.Element {
  return (
    <div className="p-4 lg:p-5 xl:p-6 flex flex-col justify-center items-center bg-page">
      <section className="p-4 lg:p-5 xl:p-6 flex flex-col gap-6 w-full md:w-[46rem] lg:w-[65rem] rounded-2xl bg-white">
        <h1 className="font-semibold text-grey-900 text-xl lg:text-2xl">Daftar Buku</h1>
        <section className="flex flex-row gap-2">
          <input
            type="search"
            placeholder="Search"
            className="px-3 py-2 w-[20rem] outline-none rounded-xl border border-gray-300 focus:border-secondary bg-white hover:bg-page focus:bg-white duration-200" />
          <button type="submit" className="px-4 py-2 text-center font-semibold text-white outline-none rounded-xl bg-primary hover:brightness-90 active:brightness-100 duration-200">Cari</button>
        </section>
        <Table/>
      </section>
    </div>
  )
}