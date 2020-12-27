import React from 'react';

export type Props = {
  label: string;
  onClick?: () => void
};

export const Button: React.FC<Props> = ({ label, onClick }) => {
  return(
    <button
      type="button"
      className="text-xl font-medium text-red-600"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
