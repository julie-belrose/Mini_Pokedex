import React from 'react';
import { Link } from 'react-router-dom';

export interface EmptyStateProps {
  title?: string;             
  message?: string;  
  actionText?: string;
  actionPath?: string;         
  children?: React.ReactNode; 
}


export const EmptyState: React.FC<EmptyStateProps> = ({ title, message, actionText, actionPath, children }) => {
  return (
    <div className="empty-state">
      <h3>{title || 'No results found'}</h3>
      <h4>{message || 'The results you were looking for were not found.'}</h4>
      {actionText && actionPath && <Link to={actionPath}>{actionText}</Link>}
      {children}
    </div>
  );
};
