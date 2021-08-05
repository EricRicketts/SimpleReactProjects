import { render, screen } from '@testing-library/react';
import { UnorderedList } from "./components/ul_list";

describe('Unordered List', function () {
  let listItems;
  beforeEach(() => {
    listItems = ['Item 1', 'Item 2'];
    render(<UnorderedList className="Foo"
                          listItems={listItems}
          />);
  });

  test('list items are present', function () {
    listItems.forEach(text => {
      expect(screen.getByText(text)).toBeInTheDocument();
    })
  });
});
