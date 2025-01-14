import{ useMemo } from "react";

export function FilteredList({ list }) {
  const filteredList = useMemo(() => {
    return list.filter((item) => item.age > 18);
  }, [list]);

  return (
    <div>
      <h2>Filtered List:</h2>
      <ul>
        {filteredList.map((item) => (
          <li key={item.id}>
           NAME: {item.name} - AGE: {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
}