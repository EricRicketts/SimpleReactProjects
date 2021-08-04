export function UnorderedList({ className, listItems }) {
  return (
    <ul className={className}>
      {listItems.map(text => <li>{text}</li>)}
    </ul>
  );
}