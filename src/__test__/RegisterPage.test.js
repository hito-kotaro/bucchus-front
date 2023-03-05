import { render, screen, fireEvent } from "@testing-library/react";
import InputForm from "../components/InputForm";

describe("InputForm", () => {
  const mockOnClickOrder = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without errors", () => {
    render(<InputForm onClickOrder={mockOnClickOrder} tooManyDrink={false} />);
    expect(screen.getByPlaceholderText("飲み物を選択")).toBeInTheDocument();
  });

  // it("calls onClickOrder function when order button is clicked", () => {
  //   render(<InputForm onClickOrder={mockOnClickOrder} tooManyDrink={false} />);
  //   const autoCompleteEl = screen.getByTestId("order-menu");

  //   fireEvent.change(screen.getByPlaceholderText("飲み物を選択"), {
  //     target: { value: "ビール" },
  //   });
  //   console.log(screen.getByPlaceholderText("飲み物を選択"));

  //   fireEvent.click(screen.getByTestId("order-btn"));

  // expect(mockOnClickOrder).toHaveBeenCalled();
  // expect(mockOnClickOrder).toHaveBeenCalledWith({
  //   image: "beer.png",
  //   name: "ビール",
  // });
  // });

  it("disables order button when no drink is selected", () => {
    render(<InputForm onClickOrder={mockOnClickOrder} tooManyDrink={false} />);
    expect(screen.getByTestId("order-btn")).toBeDisabled();
  });
});
