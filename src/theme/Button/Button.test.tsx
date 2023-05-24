import renderer from "react-test-renderer";
import Button from ".";

const clickHandler = jest.fn();

it("renders correctly when there is default button", () => {
  const tree = renderer.create(<Button>Default</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there is button with onclick handle", () => {
  const tree = renderer
    .create(<Button onClick={clickHandler}>Default</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there is submit button", () => {
  const tree = renderer.create(<Button type="submit">Submit</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there is outlined button", () => {
  const tree = renderer
    .create(<Button btnClass="btn-outlined">Outlined</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there is disabled outlined button", () => {
  const tree = renderer
    .create(
      <Button btnClass="btn-outlined" disabled>
        Outlined Disabled
      </Button>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there is title attribute", () => {
  const tree = renderer
    .create(
      <Button btnClass="btn-outlined" title="Button Title" disabled>
        Title
      </Button>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there is styled button with custom class", () => {
  const tree = renderer
    .create(
      <Button
        style={{ fontStyle: "italic", padding: "20px" }}
        className="text-green-600"
      >
        Styled Button
      </Button>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
