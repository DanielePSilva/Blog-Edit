import React from "react";

interface selectProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
function SelectComponent({ value, onChange }: selectProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "4rem",
        marginTop: "4rem",
      }}
    >
      <select value={value} onChange={onChange}>
        <option value="newest">Mais Recente</option>
        <option value="oldest"> Mais Antigo</option>
      </select>
    </div>
  );
}
export default SelectComponent;
