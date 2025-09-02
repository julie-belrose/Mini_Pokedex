interface SelectFilterProps<T extends string> {
  label: string;
  options: T[];
  value: T | null;
  onChange: (val: T | null) => void;
  allLabel?: string; 
}

export function SelectFilter<T extends string>({
  label,
  options,
  value,
  onChange,
  allLabel = 'All',
}: SelectFilterProps<T>) {
  return (
    <label>
      {label}
      <select
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value ? (e.target.value as T) : null)}
      >
        {/* Option vide for display the label "All" in the select */}
        <option value="">{allLabel}</option>
        {/* Options to display the list of types */}
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}