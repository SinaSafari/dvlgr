import Layout from "@/components/layout";
import { render, screen } from "@testing-library/react";

const sum = (a, b) => {
  return a + b;
};

describe("sum functionality", () => {
  it("should be 4", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("component test", () => {
  test("layout component", () => {
    render(<Layout />);
  });
});
