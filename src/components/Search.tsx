import React from 'react';

export interface SearchProps {
  value: string;
  onChange: (next: string) => void;
  onClear?: () => void;
  id?: string;
  placeholder?: string;
  autoFocus?: boolean;
}
export const Search: React.FC<SearchProps> = ({ value, onChange, onClear, id, placeholder, autoFocus }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
        id={id}
        autoFocus={autoFocus}
      />
      {onClear && <button type="button" onClick={onClear} className="clear-button">Reset search</button>}
    </div>
  );
};
