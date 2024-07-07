import Select from "./select";

export default function Input({
  name,
  label,
  type,
  data,
}: {
  name: string;
  label: string;
  type: string;
  data: foreign[] | null;
}): JSX.Element {
  return (
    <div key={name} className={`flex flex-col gap-1 w-full md:w-[24rem]`}>
      <label htmlFor={name} className="text-gray-800">
        {label}
      </label>
      {data === null ? (
        <input
          required
          id={name}
          name={name}
          type={type}
          className="w-full input-primary"
        />
      ) : (
        <Select label={label} name={name} datas={data!} />
      )}
    </div>
  );
}
