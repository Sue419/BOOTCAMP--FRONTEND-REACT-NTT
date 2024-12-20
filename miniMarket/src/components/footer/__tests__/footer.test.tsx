import { render } from "@testing-library/react";
import Footer from "../footer";

describe("Footer component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
