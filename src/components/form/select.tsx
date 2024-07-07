export default function Select({
  name,
  label,
  datas,
}: {
  name: string;
  label: string;
  datas: foreign[];
}) {
  return (
    <select required id={name} name={name} className="w-full input-primary">
      <option value="" disabled>
        {label}
      </option>
      {datas.map((data) => {
        return <option value={data.id}>{data.name}</option>;
      })}
    </select>
  );
}
