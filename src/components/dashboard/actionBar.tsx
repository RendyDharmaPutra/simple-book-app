"use client";

import Link from "next/link";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function ActionBar(): JSX.Element {
	const searchParams = useSearchParams();
	const search = new URLSearchParams(searchParams);
	const path: string = usePathname();
	const { replace } = useRouter();

	const handleSearch = (query: string) => {
		query ? search.set("search", query) : search.delete("search");
	};

	const onSearch = () => {
		replace(`${path}?${search.toString()}`);
	};

	return (
		<section className="row-section md:justify-between gap-4">
			<div className="row-section gap-2">
				<input
					type="text"
					placeholder="Cari Judul atau Penulis Buku"
					onChange={(e) => handleSearch(e.target.value)}
					defaultValue={searchParams.get("search")?.toString()}
					className="w-full md:w-[20rem] input-primary"
				/>
				<button
					onClick={onSearch}
					className="flex flex-row justify-center items-center min-h-[2.5rem] btn-primary"
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
			<div className="row-section gap-2">
				<Link
					href={"/addWriter"}
					className="w-full md:w-[10rem] min-h-[2.5rem] btn-primary"
				>
					Tambah Penulis
				</Link>
				<Link
					href={"/add"}
					className="w-full md:w-[9rem] min-h-[2.5rem] btn-primary"
				>
					Tambah Buku
				</Link>
			</div>
		</section>
	);
}
