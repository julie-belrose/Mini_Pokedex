import React from 'react';

export interface SearchProps {
  id?: string;
  placeholder?: string;
  autoFocus?: boolean;
  value: string;
  onChange: (next: string) => void;
  onClear?: () => void;
  clearLabel?: string;
}

export const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  onClear,
  id,
  placeholder,
  autoFocus,
  clearLabel = 'Reset search',
}) => {
  return (
    <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      {id && <label htmlFor={id} className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">Search</label>}
      <input
        id={id}
        autoFocus={autoFocus}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
      />
      {onClear && (
        <button type="button" onClick={onClear} className="clear-button">
          {clearLabel}
        </button>
      )}
    </div>
  );
};