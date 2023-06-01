import renderer from "react-test-renderer";
import RadioTag from ".";

const changeHandler = jest.fn();

it("renders correctly when there is default radioTag", () => {
  const tree = renderer
    .create(<RadioTag name="radio-filter" value="first" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there is radioTag with onChange event handle", () => {
  const tree = renderer
    .create(
      <RadioTag name="radio-filter" value="first" onChange={changeHandler} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there is checked radioTag", () => {
  const tree = renderer
    .create(
      <RadioTag
        name="radio-filter"
        value="first"
        checked
        onChange={changeHandler}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there is disabled radioTag", () => {
  const tree = renderer
    .create(
      <RadioTag
        name="radio-filter"
        value="first"
        disabled
        onChange={changeHandler}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there is radioTag with label", () => {
  const tree = renderer
    .create(
      <RadioTag
        name="radio-filter"
        value="first"
        label={<h4>First</h4>}
        onChange={changeHandler}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there is radioTag with custom style and class", () => {
  const tree = renderer
    .create(
      <RadioTag
        name="radio-filter"
        value="first"
        label={<h4>First</h4>}
        onChange={changeHandler}
        className="custom-radio"
        style={{ border: "2px solid yellow" }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
