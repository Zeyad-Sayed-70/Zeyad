import Navbar from "@/components/Common/Navbar/Navbar";
import { render, screen } from "@testing-library/react";

test("render navbar component", () => {
  render(<Navbar />);

  expect(screen.getByRole("navigation")).toMatchSnapshot();
});
