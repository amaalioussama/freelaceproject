// CustomDropdown.jsx

import React from 'react';
import { TEDropdown, TEDropdownToggle, TEDropdownMenu, TEDropdownItem } from 'tw-elements-react';

export default function CustomDropdown() {
  return (
    <TEDropdown>
      <TEDropdownToggle>
        Data {/* Text for the dropdown toggle */}
        <span className="ml-2">
          {/* SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 inline-block"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </TEDropdownToggle>
      <TEDropdownMenu>
        {/* Dropdown items */}
        <TEDropdownItem>
          <a href="/Forex" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Forex
          </a>
        </TEDropdownItem>
        <TEDropdownItem>
          <a href="/Forex-emerging-currencies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Forex (emerging currencies)
          </a>
        </TEDropdownItem>
      </TEDropdownMenu>
    </TEDropdown>
  );
}
