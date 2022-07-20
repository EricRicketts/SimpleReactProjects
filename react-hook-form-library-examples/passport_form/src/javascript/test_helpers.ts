import userEvent from "@testing-library/user-event";
import {render} from "@testing-library/react";

const setup = (jsx: JSX.Element) => {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  }
}

export {setup};
