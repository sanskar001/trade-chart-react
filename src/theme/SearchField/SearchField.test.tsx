import renderer from "react-test-renderer";
import SearchField from ".";

const changeHandler = jest.fn();

it("renders correctly when there is default searchfield", () => {
  const tree = renderer
    .create(<SearchField value="APPLE" onChange={changeHandler} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there is searchfield with custom class", () => {
  const tree = renderer
    .create(
      <SearchField
        value="APPLE"
        onChange={changeHandler}
        className="bg-green-200"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there is searchfield with custom style", () => {
  const tree = renderer
    .create(
      <SearchField
        value="APPLE"
        onChange={changeHandler}
        style={{ backgroundColor: "lightcyan" }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there is autoFocus searchfield", () => {
  const tree = renderer
    .create(<SearchField value="APPLE" onChange={changeHandler} autoFocus />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there is searchfield other attributes", () => {
  const tree = renderer
    .create(
      <SearchField
        value="APPLE"
        onChange={changeHandler}
        name="search symbol"
        placeholder="Search Symbol"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
