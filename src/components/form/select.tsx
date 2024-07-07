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
    <select
      required
      key={name}
      // defaultValue={"placeholder"}
      id={name}
      name={name}
      className="w-full input-primary"
    >
      {/* <option value="placeholder" disabled>
        Nama {label}
      </option> */}
      {datas.map((data) => {
        return (
          <option key={data.id} value={data.id}>
            {data.name}
          </option>
        );
      })}
    </select>
  );
}
