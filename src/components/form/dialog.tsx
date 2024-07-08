export default function Dialog(): JSX.Element {
  return (
    <div className="p-4 fixed inset-0 flex items-start justify-end z-50">
      <section className="p-4 flex flex-col gap-1 bg-page rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-gray-900">
          Menambahkan data buku
        </h2>
        <p className="text-sm text-gray-600">
          Buku yang diberikan sedang diproses...
        </p>
      </section>
    </div>
  );
}
