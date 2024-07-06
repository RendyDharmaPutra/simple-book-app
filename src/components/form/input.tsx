export default function Input({
	name,
	type,
}: {
	name: string;
	type: string;
}): JSX.Element {
	return (
		<div className="flex flex-col gap-1 w-full md:w-[24rem]">
			<label htmlFor={name} className="">
				{name}
			</label>
			<input id={name} type={type} className="w-full input-primary" />
		</div>
	);
}
