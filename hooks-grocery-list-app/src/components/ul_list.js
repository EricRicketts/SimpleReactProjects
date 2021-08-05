import React from 'react';

export function UnorderedList({ className, listItems }) {
  return (
    <ul className={className}>
      {listItems.map((text, index) => <li key={index}>{text}</li>)}
    </ul>
  );
}