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
    <div className="search-container">
      {id && <label htmlFor={id} className="sr-only">Search</label>}
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