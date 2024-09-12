import "@testing-library/jest-dom/vitest";

vi.mock("next/navigation", () => require("next-router-mock"));

vi.mock("next/image", () => ({
  default: () => <div />,
}));
