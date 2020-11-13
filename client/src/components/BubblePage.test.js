import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchData as mockFetchData } from '../api/fetchData'
jest.mock('../api/fetchData')

// let colors = [
//   {
//     color: "aliceblue",
//     code: {
//       hex: "#f0f8ff"
//     },
//     id: 1
//   },
//   {
//     color: "limegreen",
//     code: {
//       hex: "#99ddbc"
//     },
//     id: 2
//   },
// ]

test("Fetches api data and renders the bubbles", async () => {
  // mockFetchData.mockResolvedValueOnce(colors)
  const {rerender} = render(<BubblePage/>)

  // page with headers rendering properly
  const colorHeader = screen.getByText(/colors/i)
  const bubblesHeader = screen.getByText(/bubbles/i)

  // let colorObjects = screen.queryAllByTestId('color')
  // expect(colorObjects).toStrictEqual([])

  rerender(<BubblePage/>)
  
  // colors from API rendering
  await waitFor(() => screen.queryByText(/alice/i))
  const limegreen= screen.queryByText(/lime/i)


});
