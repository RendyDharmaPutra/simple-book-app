"use client";

import Link from "next/link";

export default function Error(): JSX.Element {
  return (
    <section className="w-full layout justify-center items-center">
      <div className="w-full sm:w-[24rem] layout justify-center items-center gap-4 rounded-2xl bg-white">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="headline">Buku tidak ditemukan</h1>
          <p className="text-gray-700">Buku yang anda cari tidak terdaftar</p>
        </div>
        <Link
          href="/"
          className="px-4 py-2 text-gray-800 rounded-xl bg-gray-200 hover:brightness-90 duration-200"
        >
          Kembali ke Dashboard
        </Link>
      </div>
    </section>
  );
}
