import Link from "next/link";

export default function Footer(): JSX.Element {
	return (
		<div className="p-4 flex justify-center w-full bg-white">
			<p className="text-sm font-semibold">
				©2024 • Simple Gemini Chat App <span className="font-normal">by</span>{" "}
				<Link target="_blank" href={`https://archilst-portofolio.vercel.app`} className="font-bold text-primary">
					Archilst
				</Link>
			</p>
		</div>
	);
}