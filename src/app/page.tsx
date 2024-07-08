import ActionBar from "@/components/dashboard/actionBar";
import Table from "@/components/dashboard/table";

export default function Dashboard({
  searchParams,
}: {
  searchParams?: { search: string };
}): JSX.Element {
  return (
    <section className="layout gap-6 w-full rounded-2xl bg-white">
      <h1 className="headline">Daftar Buku</h1>
      <ActionBar />
      <Table search={searchParams?.search || ""} />
    </section>
  );
}
