import Link from "next/link"

export default function Table(): JSX.Element {
    return (
        <div
  className="relative flex flex-col w-full max-h-[40rem] overflow-x-scroll text-gray-800 bg-zinc-50 shadow-md">
  <table className="w-full min-w-max text-left table-auto md:table-fixed">
    <thead>
      <tr>
        <THead name="Judul"/>
        <THead name="Penulis"/>
        <THead name="Kategori"/>
        <THead name="Penerbit"/>
        <THead name="Tahun Terbit"/>
        <THead name="Aksi"/>
      </tr>
    </thead>
    <tbody>
      <TBody id={1} title="Harry Potter: and the chamber of secrets" writer="JK.Rowling" publisher="Airlangga" category="Fantasy" year={2000} />
      <TBody id={1} title="Harry Potter" writer="JK.Rowling" publisher="Airlangga" category="Fantasy" year={2000} />
      <TBody id={1} title="Harry Potter" writer="JK.Rowling" publisher="Airlangga" category="Fantasy" year={2000} />
      <TBody id={1} title="Harry Potter" writer="JK.Rowling" publisher="Airlangga" category="Fantasy" year={2000} />
      <TBody id={1} title="Harry Potter" writer="JK.Rowling" publisher="Airlangga" category="Fantasy" year={2000} /> 
    </tbody>
  </table>
</div>
    )
}

function THead({name}: {name: string}): JSX.Element {
  return (
      <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
          {name}
        </p>
      </th>
  )
}

function TBody({id, title, writer, publisher, category, year}: {id: number, title: string, writer: string, publisher: string, category: string, year: number}): JSX.Element {
  return (
    <tr>
      <TCol content={title} />
      <TCol content={category} />
      <TCol content={writer} />
      <TCol content={publisher} />
      <TCol content={year} />
      <td className="p-4 border-b border-blue-gray-50">
        <Link href={`/${id}`} className="text-sm antialiased font-medium leading-normal text-primary">
          More
        </Link>
      </td>
    </tr>
  )
}

function TCol({content}: {content: string | number}): JSX.Element {
  return (
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {content}
          </p>
        </td>
  )
}