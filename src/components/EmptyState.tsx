import React from 'react';

export interface EmptyStateProps {
  title?: string;             
  message?: string;           
  children?: React.ReactNode; 
}


export const EmptyState: React.FC<EmptyStateProps> = ({ title, message, children }) => {
  return (
    <div className="empty-state">
      <h3>{title || 'No results found'}</h3>
      <h4>{message || 'The results you were looking for were not found.'}</h4>
      {children}
    </div>
  );
};
