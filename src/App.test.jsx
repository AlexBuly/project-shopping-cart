import { render, screen, fireEvent, within } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "./routes/routes";
import "@testing-library/jest-dom";
import { beforeEach, afterEach, test, expect, vi } from "vitest";

beforeEach(() => {
  globalThis.fetch = vi.fn((url) => {
    const id = url.match(/products\/(\d+)/)?.[1] ?? 1;
    return Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          id,
          title: `Test Product ${id}`,
          price: 19.98,
          image: "test.jpg",
        }),
    });
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

function renderWithRouter(initialRoute = "/shop") {
  const router = createMemoryRouter(routes, { initialEntries: [initialRoute] });
  return render(<RouterProvider router={router} />);
}

// --- Test increment/decrement ---
test("increments and decrements product quantity", async () => {
  renderWithRouter("/shop");

  // Wait for product to appear
  const product1 = await screen.findByText(/^Test Product 1$/i);

  // Scope queries to this product
  const productItem = product1.closest(".item");
  const { getByRole, getByLabelText } = within(productItem);

  const plusBtn = getByRole("button", { name: "+" });
  const minusBtn = getByRole("button", { name: "-" });
  const quantityDisplay = getByLabelText("quantity");

  expect(quantityDisplay).toHaveTextContent("0");

  fireEvent.click(plusBtn);
  expect(quantityDisplay).toHaveTextContent("1");

  fireEvent.click(plusBtn);
  expect(quantityDisplay).toHaveTextContent("2");

  fireEvent.click(minusBtn);
  expect(quantityDisplay).toHaveTextContent("1");

  fireEvent.click(minusBtn);
  fireEvent.click(minusBtn); // extra click should clamp to 0
  expect(quantityDisplay).toHaveTextContent("0");
});

// --- Test adding to cart ---
test("adds correct quantity to cart", async () => {
  renderWithRouter("/shop");

  const product1 = await screen.findByText(/^Test Product 1$/i);
  const productItem = product1.closest(".item");
  const { getByRole } = within(productItem);

  // Increase quantity
  const plusBtn = getByRole("button", { name: "+" });
  fireEvent.click(plusBtn);
  fireEvent.click(plusBtn);

  const addBtn = getByRole("button", { name: /Add to Cart/i });
  fireEvent.click(addBtn);

  // Navigate to cart
const cartLink = screen.getByText("0").closest("a");
fireEvent.click(cartLink);

  await screen.findByText(/^Test Product 1$/i);

  expect(screen.getByText(/x 2/i)).toBeInTheDocument();
  expect(screen.getByText(/Total: \$19.98/i)).toBeInTheDocument();
});

// --- Test removing from cart ---
test("removes an item from the cart", async () => {
  renderWithRouter("/shop");

  const product1 = await screen.findByText(/^Test Product 1$/i);
  const productItem = product1.closest(".item");
  const { getByRole } = within(productItem);

  const plusBtn = getByRole("button", { name: "+" });
  fireEvent.click(plusBtn);

  const addBtn = getByRole("button", { name: /Add to Cart/i });
  fireEvent.click(addBtn);

  // Navigate to cart
 const cartLink = screen.getByText("0").closest("a");
 fireEvent.click(cartLink);

  await screen.findByText(/^Test Product 1$/i);

  const cartItem = screen.getByText(/^Test Product 1$/i).closest(".cart-item");
  const removeBtn = within(cartItem).getByRole("button", { name: /Remove/i });
  fireEvent.click(removeBtn);

  expect(screen.queryByText(/^Test Product 1$/i)).not.toBeInTheDocument();
  expect(screen.getByText(/Total: \$0.00/i)).toBeInTheDocument();
});
