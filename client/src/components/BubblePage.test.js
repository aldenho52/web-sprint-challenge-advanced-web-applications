import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";


test("Fetches api data and renders the bubbles", async () => {
  const {rerender} = render(<BubblePage/>)

  // page with headers rendering properly
  const colorHeader = screen.getByText(/colors/i)
  const bubblesHeader = screen.getByText(/bubbles/i)

  rerender(<BubblePage/>)

  // colors from API rendering
  await waitFor(() => screen.queryByText(/alice/i))
  const limegreen= screen.queryByText(/lime/i)
  const bisque= screen.queryByText(/bisque/i)
  const blueviolet= screen.queryByText(/blueviolet/i)

});
