import React from "react";

const SearchIcon = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 42 42"
      fill="none"
      {...props}
    >
      <path
        d="M20.5921 36.3226C29.2799 36.3226 36.3228 29.2797 36.3228 20.5918C36.3228 11.904 29.2799 4.86108 20.5921 4.86108C11.9042 4.86108 4.86133 11.904 4.86133 20.5918C4.86133 29.2797 11.9042 36.3226 20.5921 36.3226Z"
        stroke="#200E32"
        stroke-opacity="0.4"
        stroke-width="2.625"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M31.5317 32.3484L37.6987 38.4996"
        stroke="#200E32"
        stroke-opacity="0.4"
        stroke-width="2.625"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
