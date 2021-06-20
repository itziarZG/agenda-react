import React from 'react';

const IconEdit = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`icon-edit ${className}`}
    >
      <path
        className="primary"
        d="M4 14a1 1 0 0 1 .3-.7l11-11a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-11 11a1 1 0 0 1-.7.3H5a1 1 0 0 1-1-1v-3z"
      />
      <rect width="20" height="2" x="2" y="20" className="secondary" rx="1" />
    </svg>
  );
};

export default IconEdit;
